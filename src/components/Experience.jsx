import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import Section from "./ui/Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      watermark="Work"
      eyebrow="git log --work"
      title="Where I've shipped."
      intro="Two years across product teams — from enterprise fintech to a carbon-accounting platform — plus a graduate role at ASU."
    >
      <ol className="relative space-y-6 pl-6 sm:pl-8">
        {/* Accent rail */}
        <span
          aria-hidden
          className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent"
        />
        {EXPERIENCES.map((exp, i) => {
          const current = /present/i.test(exp.year);
          return (
            <motion.li
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              {/* Node on the timeline */}
              <span className="absolute -left-[31px] top-2 grid h-4 w-4 place-items-center sm:-left-[39px]">
                <span
                  className={`h-4 w-4 rounded-full border bg-base ${
                    current ? "border-accent shadow-glow" : "border-accent/50"
                  }`}
                />
                <span
                  className={`absolute h-1.5 w-1.5 rounded-full bg-accent ${
                    current ? "animate-glowpulse" : ""
                  }`}
                />
              </span>

              <div className="panel rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {exp.role}{" "}
                    <span className="text-accent">· {exp.company}</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    {current && (
                      <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                        Now
                      </span>
                    )}
                    <span className="cap-sm !px-2 !py-1 !text-[10px] text-ink-muted">
                      {exp.year}
                    </span>
                  </div>
                </div>
                {exp.location && (
                  <p className="mt-1 text-xs text-ink-faint">{exp.location}</p>
                )}
                <ul className="mt-3 space-y-1.5">
                  {exp.description
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean)
                    .map((line, li) => (
                      <li
                        key={li}
                        className="flex gap-2 text-sm leading-relaxed text-ink-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        {line}
                      </li>
                    ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="cap-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
