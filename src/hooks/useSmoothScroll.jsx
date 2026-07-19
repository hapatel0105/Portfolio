import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { prefersReducedMotion } from "../lib/utils";

const ScrollContext = createContext({ scrollTo: () => {} });

/**
 * Wraps the app in a Lenis smooth-scroll context for one continuous,
 * cinematic top-to-bottom scroll, and exposes `scrollTo(target)`. Falls back
 * to native smooth scroll under prefers-reduced-motion.
 */
export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target, options = {}) => {
    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -72, duration: 1.2, ...options });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSmoothScroll = () => useContext(ScrollContext);
