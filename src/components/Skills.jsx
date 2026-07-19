import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../constants";
import Section from "./ui/Section";

// Signature skills that glow by default — the "home keys" of the stack.
const CORE = new Set([
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS Lambda",
]);

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      watermark="Stack"
      eyebrow="stack --list"
      title="The keys I build with."
      intro="A full-stack toolkit spanning front-end frameworks, back-end services, data, and cloud — grouped into clusters like a keyboard. Highlighted keys are what I reach for most."
    >
      <div className="space-y-7">
        {SKILL_GROUPS.map((group, gi) => (
          <div key={group.row}>
            <div className="mb-3 flex items-center gap-3">
              <span className="cap-sm !px-2.5 !py-1 text-accent">
                {`R${gi + 1}`}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
                {group.row}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
              className="flex flex-wrap gap-3"
            >
              {group.items.map((item) => {
                const core = CORE.has(item.name);
                return (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -4 }}
                    whileTap={{ y: 3 }}
                    className={`keycap group flex h-[72px] w-[88px] cursor-default flex-col items-center justify-center rounded-key px-2 text-center transition-colors hover:!border-accent/50 ${
                      core ? "!border-accent/40 shadow-glow-soft" : ""
                    }`}
                  >
                    <span
                      className={`font-mono text-base font-semibold transition-colors group-hover:text-accent ${
                        core ? "text-accent" : "text-ink"
                      }`}
                    >
                      {item.key}
                    </span>
                    <span className="mt-1 text-[10px] leading-tight text-ink-faint">
                      {item.name}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
