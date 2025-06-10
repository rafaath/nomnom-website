"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam) return;

    const updateBeams = () => {
      const beams = beam.querySelectorAll(".beam");
      beams.forEach((beam: Element) => {
        const beamElement = beam as HTMLElement;
        beamElement.style.animationDuration = `${Math.random() * 3 + 2}s`;
        beamElement.style.animationDelay = `${Math.random() * 2}s`;
      });
    };

    updateBeams();
    const interval = setInterval(updateBeams, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={beamRef}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Animated beams */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "beam absolute h-0.5 w-px animate-pulse bg-gradient-to-l from-transparent via-primary to-transparent opacity-20",
            i % 2 === 0 ? "left-1/4" : "right-1/4"
          )}
          style={{
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `beamMove ${Math.random() * 3 + 2}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <style jsx>{`
        @keyframes beamMove {
          0% {
            transform: translateY(-100vh) rotate(45deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(45deg);
            opacity: 0;
          }
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}); 