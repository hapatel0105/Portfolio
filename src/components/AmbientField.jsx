import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/utils";

/**
 * A cinematic ambient background: slow-drifting glowing particles plus soft
 * radial light blooms, in the teal accent. Sits behind every scene so the
 * whole site reads as one lit, atmospheric frame (à la /zeroz, dark + teal).
 * Canvas-based and DPR-aware; renders a single static frame under
 * prefers-reduced-motion.
 */
export default function AmbientField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let w = 0;
    let h = 0;
    let dpr = 1;
    const reduce = prefersReducedMotion();

    const rand = (a, b) => a + Math.random() * (b - a);

    let dots = [];
    const seed = () => {
      const count = Math.min(56, Math.floor((w * h) / 26000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: rand(0.6, 2.6),
        a: rand(0.06, 0.5),
        vx: rand(-0.08, 0.08),
        vy: rand(-0.14, -0.03), // gently rise
        tw: rand(0.002, 0.01), // twinkle speed
        tp: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const blooms = () => {
      // Large soft radial light pools
      const pools = [
        { x: w * 0.5, y: h * 0.12, r: Math.max(w, h) * 0.45, c: "45,212,191", a: 0.1 },
        { x: w * 0.9, y: h * 0.85, r: Math.max(w, h) * 0.4, c: "139,92,246", a: 0.07 },
        { x: w * 0.08, y: h * 0.6, r: Math.max(w, h) * 0.35, c: "45,212,191", a: 0.06 },
      ];
      pools.forEach((p) => {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, `rgba(${p.c},${p.a})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });
    };

    const drawDots = (t) => {
      ctx.globalCompositeOperation = "lighter";
      dots.forEach((d) => {
        const alpha = d.a * (0.6 + 0.4 * Math.sin(d.tp + t * d.tw));
        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r * 6);
        g.addColorStop(0, `rgba(94,234,212,${alpha})`);
        g.addColorStop(1, "rgba(94,234,212,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 6, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = "source-over";
    };

    const render = (t) => {
      ctx.clearRect(0, 0, w, h);
      blooms();
      drawDots(t);
      if (!reduce) {
        dots.forEach((d) => {
          d.x += d.vx;
          d.y += d.vy;
          if (d.y < -10) d.y = h + 10;
          if (d.x < -10) d.x = w + 10;
          if (d.x > w + 10) d.x = -10;
        });
        raf = requestAnimationFrame(render);
      }
    };

    resize();
    render(0);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
