"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  rotationIntensity?: number;
  translateZ?: number;
  glareEnabled?: boolean;
}

export function Card3D({
  children,
  className,
  containerClassName,
  rotationIntensity = 15,
  translateZ = 100,
  glareEnabled = false,
}: Card3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse position as motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth the mouse movement for a more natural effect
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 300 });
  
  // Transform the smoothed mouse movement to rotation values
  const rotateX = useTransform(smoothMouseY, [0, 1], [rotationIntensity, -rotationIntensity]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-rotationIntensity, rotationIntensity]);

  // Handle mouse move events
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate the normalized mouse position (0 to 1)
    const normalizedX = (e.clientX - rect.left) / rect.width;
    const normalizedY = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x: normalizedX, y: normalizedY });
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  return (
    <div 
      ref={containerRef}
      className={cn("perspective", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className={cn("w-full transition-all duration-200", className)}
        style={{
          rotateX: isHovering ? rotateX : 0,
          rotateY: isHovering ? rotateY : 0,
          translateZ: isHovering ? translateZ : 0,
        }}
      >
        {children}
        
        {/* Glare effect */}
        {glareEnabled && isHovering && (
          <div 
            className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden"
            style={{
              background: `radial-gradient(
                circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                rgba(255, 255, 255, 0.25) 0%, 
                rgba(255, 255, 255, 0) 60%
              )`,
              mixBlendMode: "overlay",
            }}
          />
        )}
      </motion.div>
    </div>
  );
} 