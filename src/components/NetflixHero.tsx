"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Info, Github, Linkedin, Mail } from "lucide-react";
import AnimText from "./ui/AnimatedText/AnimText";
import { CometCard } from "@/components/CometCard";
import { Spotlight } from "@/components/ui/spotlight-new";
export function NetflixHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 netflix-gradient" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 text-red-500/20 text-6xl font-mono"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"{ }"}
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 text-blue-500/20 text-4xl font-mono"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          &lt;/&gt;
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/3 text-green-500/20 text-5xl font-mono"
          animate={{
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⚛
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 lg:flex lg:flex-row md:flex-col sm:flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-3/4 flex-col">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge
              variant="outline"
              className="text-white border-white/30 bg-black/30 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Hired
            </Badge>
          </motion.div>

          {/* Main Title with Typing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white netflix-text-shadow mb-6"
          >
            <span>Rakshit Kumar</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-200 netflix-text-shadow mb-4"
          >
            {/* Associate Consultant */}
            <AnimText delay={0} />
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl"
          >
            Building resilient, scalable products with React, Angular, Spring
            Boot, and Django. Specializing in fast iterations, measurable
            outcomes, and reliability at scale.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {[
              "React",
              "Angular",
              "Spring Boot",
              "Django",
              "Node.js",
              "VTEX",
              "Mirakl",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/10 text-white border-white/20"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-semibold"
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Play className="w-5 h-5 mr-2" />
              View Experience
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Info className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/Rakshit1006"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakshit-kumar-1b0228222/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:k.rakshit2001@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </motion.div>
        </div>
        <Spotlight />
        <div className="#imageSection max-lg:hidden w-fit">
          <CometCard>
            <button
              type="button"
              className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
              aria-label="View invite F7RA"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  <Image
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                    alt="Invite background"
                    src="/images/profile_image.png"
                    fill
                    style={{
                      boxShadow: "rgba(108, 74, 74, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-col flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                <audio id="site-audio" controls className="w-full">
                  <source src="/Restless.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="mt-2 flex-auto text-xs text-gray-300 opacity-50">
                  Restless - Rakshit Kumar
                </div>
              </div>
            </button>
          </CometCard>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 netflix-hero-gradient pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
