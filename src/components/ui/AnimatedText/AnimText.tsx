import { useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import RedoAnimText from "./RedoAnimText";

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  const [done, setDone] = useState(false);
  const baseText = "Rakshit Kumar...";
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="typing-animation">
      {/* <motion.span>{displayText}</motion.span> */}
      {done && <></>}
      <RedoAnimText delay={delay + 1} />
      {/* <CursorBlinker /> */}
    </span>
  );
}
