"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";

interface AnimatedSpotlightProps {
  children: React.ReactNode;
  className?: string;
  spotlightSize?: number;
}

export function AnimatedSpotlight({
  children,
  className,
  spotlightSize = 400,
}: AnimatedSpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const containerSize = useRef({ w: 0, h: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const updateMousePosition = (ev: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const { w, h } = containerSize.current;
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    mousePosition.current = { x, y };
    setIsHovering(x >= 0 && x <= w && y >= 0 && y <= h);
  };

  const updateContainerSize = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerSize.current = { w: rect.width, h: rect.height };
  };

  useEffect(() => {
    if (!containerRef.current) return;
    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("resize", updateContainerSize);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const animateSpotlight = () => {
      const { x, y } = mousePosition.current;
      // Add some easing to the mouse movement
      mouse.current.x += (x - mouse.current.x) * 0.1;
      mouse.current.y += (y - mouse.current.y) * 0.1;

      if (containerRef.current) {
        const spotlight = containerRef.current.querySelector(".spotlight") as HTMLElement;
        if (spotlight) {
          spotlight.style.background = `radial-gradient(
            circle ${spotlightSize}px at ${mouse.current.x}px ${mouse.current.y}px, 
            rgba(var(--spotlight-color), 0.15), 
            transparent 50%
          )`;
        }
      }

      requestAnimationFrame(animateSpotlight);
    };

    const animationFrame = requestAnimationFrame(animateSpotlight);
    return () => cancelAnimationFrame(animationFrame);
  }, [spotlightSize]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ perspective: "1000px" }}
    >
      <div
        className={cn(
          "spotlight absolute inset-0 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0"
        )}
      />
      {children}
    </div>
  );
} 