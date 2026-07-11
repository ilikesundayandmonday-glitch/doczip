"use client";

import { useEffect, useRef } from "react";

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    let t = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    const noise = (x: number, y: number, z: number) => {
      return (
        Math.sin(x * 1.2 + z) * Math.cos(y * 1.3 - z) +
        Math.sin(x * 2.1 - z * 0.7) * Math.cos(y * 0.8 + z * 1.1)
      ) / 2;
    };

    const draw = () => {
      ctx.fillStyle = "#1C1F1D";
      ctx.fillRect(0, 0, width, height);
      const cols = 48;
      const rows = 32;
      const cw = width / cols;
      const ch = height / rows;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const n = noise(i * 0.18, j * 0.18, t);
          const v = (n + 1) / 2;
          const g = Math.floor(v * v * 110);
          ctx.fillStyle = `rgb(${Math.floor(g * 0.3)},${g},${Math.floor(g * 0.4)})`;
          ctx.fillRect(i * cw, j * ch, cw + 1, ch + 1);
        }
      }
      t += 0.008;
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: "blur(8px)" }}
    />
  );
}