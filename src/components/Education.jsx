import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "../constants";
import Section from "./ui/Section";

export default function Education() {
  return (
    <Section
      id="education"
      index="06"
      watermark="Study"
      eyebrow="cat ./education"
      title="Study & credentials."
      intro="A computer-science foundation from undergrad through graduate school, backed by AWS Academy certifications."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Education */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-ink-muted">
            <GraduationCap size={16} className="text-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.3em]">
              Education
            </span>
          </div>
          <div className="space-y-4">
            {EDUCATION.map((ed, i) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="panel rounded-2xl p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {ed.school}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">
                    {ed.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent">{ed.degree}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {ed.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-ink-muted">
            <BadgeCheck size={16} className="text-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.3em]">
              Certifications
            </span>
          </div>
          <div className="space-y-3">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="keycap flex items-start gap-3 rounded-key p-4 transition-colors hover:!border-accent/40"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-keysm bg-accent/10 font-mono text-[11px] font-bold text-accent shadow-glow-soft">
                  AWS
                </span>
                <div>
                  <h4 className="text-sm font-medium leading-snug text-ink">
                    {cert.name}
                  </h4>
                  <p className="mt-0.5 text-xs text-ink-faint">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
