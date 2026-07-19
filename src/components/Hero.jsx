import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, CornerDownLeft, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PROFILE, SOCIALS } from "../constants";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { prefersReducedMotion } from "../lib/utils";
import KeyButton from "./ui/KeyButton";
import profilePic from "../assets/My_Sticker.png";

const NAME = PROFILE.name.split(" "); // ["Harsh", "Patel"]

const bigName =
  "font-display font-bold uppercase leading-[0.82] tracking-tight text-ink " +
  "drop-shadow-[0_0_44px_rgba(45,212,191,0.25)] text-[16vw] sm:text-[13vw] lg:text-[8.5rem]";

/** Renders a word as letters that reveal one by one (replays on each mount). */
function Word({ text, delay = 0 }) {
  const reduce = prefersReducedMotion();
  return (
    <motion.h1
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
      }}
      style={{ perspective: 600 }}
      className={bigName}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          variants={{
            hidden: {
              opacity: 0,
              y: reduce ? 0 : "0.5em",
              rotateX: reduce ? 0 : -60,
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default function Hero() {
  const { scrollTo } = useSmoothScroll();
  const go = (id) => scrollTo(`#${id}`);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      aria-label="Introduction"
      className="relative flex min-h-[90vh] w-full flex-col items-center justify-center text-center"
    >
      {/* Full-bleed cinematic 3D stage */}
      <div
        aria-hidden
        className="stage pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div className="stage__source" />
        <div className="stage__spot" />
        <div className="stage__floor" />
        <div className="stage__vignette" />
      </div>

      {/* Vertical side labels */}
      <span className="pointer-events-none absolute left-1 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-ink-faint [writing-mode:vertical-rl] lg:block">
        Full Stack Developer
      </span>
      <span className="pointer-events-none absolute right-1 top-1/2 hidden -translate-y-1/2 rotate-180 font-mono text-[10px] uppercase tracking-[0.4em] text-ink-faint [writing-mode:vertical-rl] lg:block">
        MS CS · ASU
      </span>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center"
      >
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="legend mb-4"
      >
        {PROFILE.location.split(",")[1]?.trim()} · Available for work
      </motion.p>

      {/* Split headline with the character centred between the lines */}
      <div className="relative flex flex-col items-center">
        <Word text={NAME[0]} delay={0.1} />

        <div className="relative -my-2 sm:-my-4 lg:-my-6">
          {/* Framing parentheses */}
          <span className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-[8rem] -translate-y-1/2 font-display text-[6rem] font-thin text-accent/30 sm:block lg:-translate-x-[12rem] lg:text-[10rem]">
            (
          </span>
          <span className="pointer-events-none absolute left-1/2 top-1/2 hidden translate-x-[5rem] -translate-y-1/2 font-display text-[6rem] font-thin text-accent/30 sm:block lg:translate-x-[8rem] lg:text-[10rem]">
            )
          </span>
          {/* Glow behind the character */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[70px] lg:h-80 lg:w-80" />

          <motion.img
            src={profilePic}
            alt="Harsh Patel"
            width={440}
            height={440}
            initial={{ opacity: 0, scale: 0.85, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-40 animate-floaty drop-shadow-[0_24px_60px_rgba(45,212,191,0.35)] sm:w-52 lg:w-60"
          />
        </div>

        <Word text={NAME[1]} delay={0.55} />
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <KeyButton
          variant="solid"
          onClick={() => go("contact")}
          className="px-6 py-3.5"
        >
          <CornerDownLeft size={16} /> Get in touch
        </KeyButton>
        <KeyButton
          variant="ghost"
          onClick={() => go("projects")}
          legend="F5"
          className="px-6 py-3.5"
        >
          <ArrowDown size={16} /> View work
        </KeyButton>
        <KeyButton
          href={SOCIALS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="!px-3.5 !py-3.5"
        >
          <FaGithub size={18} />
        </KeyButton>
        <KeyButton
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="!px-3.5 !py-3.5"
        >
          <FaLinkedinIn size={18} />
        </KeyButton>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => go("about")}
        className="group mt-8 flex flex-col items-center gap-1 text-ink-faint transition-colors hover:text-accent"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
      </motion.div>
    </section>
  );
}
