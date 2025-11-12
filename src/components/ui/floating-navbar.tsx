"use client";
import React, { JSX, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Track visibility of the hero section (#home)
  useEffect(() => {
    const heroEl = document.getElementById("home");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHeroInView(entry.isIntersecting);
      },
      {
        // Tweak thresholds to consider hero visible when a decent portion is on screen
        root: null,
        threshold: 0.2,
      }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Visibility strictly based on hero visibility
  useEffect(() => {
    setVisible(!heroInView);
  }, [heroInView]);

  // Keep a lightweight listener to force re-evaluation on scroll changes (in case layout shifts)
  useMotionValueEvent(scrollYProgress, "change", () => {
    setVisible(!heroInView);
  });

  // Sync play state with the audio element
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    let interval: number | undefined;
    let cleanup = () => {};

    const attach = () => {
      audio = document.getElementById("site-audio") as HTMLAudioElement | null;
      if (!audio) return false;

      const onPlay = () => setIsPlaying(true);
      const onPauseOrEnd = () => setIsPlaying(false);

      audio.addEventListener("play", onPlay);
      audio.addEventListener("pause", onPauseOrEnd);
      audio.addEventListener("ended", onPauseOrEnd);

      // initialize state
      setIsPlaying(!audio.paused && !audio.ended);

      cleanup = () => {
        if (!audio) return;
        audio.removeEventListener("play", onPlay);
        audio.removeEventListener("pause", onPauseOrEnd);
        audio.removeEventListener("ended", onPauseOrEnd);
      };
      return true;
    };

    // Try immediately; if not present, retry until it appears
    if (!attach()) {
      interval = window.setInterval(() => {
        if (attach()) {
          if (interval) window.clearInterval(interval);
        }
      }, 300);
    }

    return () => {
      if (interval) window.clearInterval(interval);
      cleanup();
    };
  }, []);

  const togglePlay = () => {
    const audio = document.getElementById("site-audio") as HTMLAudioElement | null;
    if (!audio) return;
    if (audio.paused) {
      const p = audio.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // Autoplay or user gesture restrictions; leave state as is
        });
      }
    } else {
      audio.pause();
    }
  };


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed bottom-10 right-10 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems?.map((navItem: { name: string; link: string; icon?: JSX.Element }, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-950 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:block">{navItem.icon}</span>
          </a>
        ))}
        <div className="flex items-center gap-2 pl-2">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
