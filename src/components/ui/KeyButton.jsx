import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

/**
 * A button that behaves like a physical keyboard key: it depresses on press
 * and lifts on hover. Renders as <a> when `href` is supplied, else <button>.
 *
 * variant: "solid" (accent) | "ghost" (dark key) | "outline"
 */
export default function KeyButton({
  children,
  href,
  onClick,
  variant = "ghost",
  className,
  legend, // optional tiny corner legend, e.g. "⏎" or "F5"
  ...rest
}) {
  const Comp = href ? motion.a : motion.button;

  const variants = {
    solid:
      "text-base font-semibold text-[#04211d] bg-gradient-to-b from-accent-glow to-accent shadow-glow hover:shadow-glow",
    ghost:
      "text-ink keycap keycap-hover keycap-press",
    outline:
      "text-ink border border-accent/40 bg-accent/5 hover:bg-accent/10 keycap-press",
  };

  return (
    <Comp
      href={href}
      onClick={onClick}
      whileTap={{ y: 3 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-key px-5 py-3",
        "font-display text-sm tracking-tight transition-colors select-none",
        variants[variant],
        className
      )}
      {...rest}
    >
      {legend && (
        <span className="absolute right-2 top-1 font-mono text-[9px] text-current/50">
          {legend}
        </span>
      )}
      {children}
    </Comp>
  );
}
