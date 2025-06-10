"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  as: Component = "h2",
  className,
  delay = 0,
  duration = 0.05,
  once = true,
}: TextRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isInView && !isRevealed) {
      controls.start("visible");
      setIsRevealed(true);
    }
  }, [isInView, controls, isRevealed]);

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Component className={cn("", className)}>
      <motion.span
        ref={ref}
        style={{ display: "inline-block" }}
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              style={{ display: "inline-block" }}
              variants={child}
            >
              {word}
            </motion.span>
            {index !== words.length - 1 && " "}
          </React.Fragment>
        ))}
      </motion.span>
    </Component>
  );
} 