import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * A scroll section with an anchor id, a mono "eyebrow" legend, a heading,
 * and a staggered reveal on entry. Used for every major block so the page
 * reads as consistent layers inside the keyboard frame.
 */
export default function Section({
  id,
  index,
  eyebrow,
  title,
  intro,
  watermark,
  children,
  className,
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
    >
      {/* Giant ghost wordmark, /zeroz-style scale behind the heading */}
      {watermark && (
        <motion.span
          aria-hidden
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -top-4 -left-2 select-none font-display text-[20vw] font-bold uppercase leading-none tracking-tighter text-white/[0.035] sm:-top-8 lg:text-[14rem]"
        >
          {watermark}
        </motion.span>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="relative"
      >
        <motion.div variants={reveal} className="mb-3 flex items-center gap-3">
          {index != null && (
            <span className="cap-sm !px-2 !py-1 text-accent">{index}</span>
          )}
          <span className="legend">{eyebrow}</span>
        </motion.div>

        <motion.h2
          id={`${id}-title`}
          variants={reveal}
          className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h2>

        {intro && (
          <motion.p
            variants={reveal}
            className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted"
          >
            {intro}
          </motion.p>
        )}

        <motion.div variants={reveal} className="mt-12">
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
