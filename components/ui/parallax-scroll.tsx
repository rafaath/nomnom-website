"use client";

import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
  baseVelocity?: number;
  direction?: "vertical" | "horizontal";
}

export const ParallaxScroll = ({
  children,
  className,
  baseVelocity = 5,
  direction = "vertical",
}: ParallaxScrollProps) => {
  const baseX = useRef<MotionValue<number>>(null);
  const baseY = useRef<MotionValue<number>>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = React.useState(true);

  const directionMultiplier = direction === "vertical" ? 1 : -1;
  const velocity = baseVelocity * directionMultiplier;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    
    const handleScroll = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      
      setCanScroll(false);
      timeoutId = setTimeout(() => setCanScroll(true), 500);
    };
    
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const smoothVelocity = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });
  
  const y = useTransform(smoothVelocity, [0, 1], [0, -1000], {
    clamp: false,
  });
  
  const animatedStyle = direction === "vertical" 
    ? { y: canScroll ? y : 0 }
    : { x: canScroll ? y : 0 };

  return (
    <div
      ref={scrollRef}
      className={cn(
        "flex gap-4 overflow-hidden",
        direction === "vertical" ? "flex-col" : "flex-row",
        className
      )}
    >
      <motion.div
        className={cn(
          "flex",
          direction === "vertical" ? "flex-col" : "flex-row"
        )}
        style={animatedStyle}
      >
        {children}
      </motion.div>
      <motion.div
        className={cn(
          "flex",
          direction === "vertical" ? "flex-col" : "flex-row"
        )}
        style={animatedStyle}
      >
        {children}
      </motion.div>
    </div>
  );
}; 