import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin scroll-progress bar pinned to the top of the viewport that fills
 * left-to-right as the page scrolls. Spring-smoothed to match the Lenis feel.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-glow to-neon shadow-[0_0_12px_rgba(45,212,191,0.6)]"
    />
  );
}
