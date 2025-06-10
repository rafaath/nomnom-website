"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const noise = generateNoise;

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        id="canvas"
        style={{
          filter: `blur(${blur}px)`,
        }}
        {...props}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

const generateNoise = () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const w = (ctx.canvas.width = window.innerWidth);
  const h = (ctx.canvas.height = window.innerHeight);
  const cols = Math.floor(w / 50) + 1;
  const rows = Math.floor(h / 50) + 1;

  const noiseData: number[][] = [];
  for (let i = 0; i < rows; i++) {
    let row: number[] = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.random());
    }
    noiseData.push(row);
  }

  const animate = () => {
    ctx.fillStyle = "rgba(0,0,0,0.02)";
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const noise = noiseData[i][j];
        const x = j * 50;
        const y = i * 50;
        
        ctx.fillStyle = `hsla(${noise * 360}, 70%, 60%, 0.1)`;
        ctx.fillRect(x, y, 50, 50);
      }
    }

    requestAnimationFrame(animate);
  };

  animate();
};

// Initialize the noise effect
if (typeof window !== "undefined") {
  window.addEventListener("load", generateNoise);
} 