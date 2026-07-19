import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Award } from "lucide-react";
import { ABOUT_TEXT, PROFILE } from "../constants";
import Section from "./ui/Section";
import aboutPic from "../assets/about_me.png";

const FACTS = [
  { icon: MapPin, label: "Based in", value: "Phoenix, Arizona" },
  { icon: Briefcase, label: "Currently", value: "SDE I Intern @ Carbon3" },
  { icon: GraduationCap, label: "Studying", value: "MS Computer Science, ASU" },
  { icon: Award, label: "Certified", value: "3× AWS Academy Graduate" },
];

// Emphasise the opening sentence, dim the remainder (/zeroz-style).
const SENTENCES = ABOUT_TEXT.split(/(?<=\.)\s+/);
const LEAD = SENTENCES[0];
const BODY = SENTENCES.slice(1).join(" ");

/** Techy viewfinder corner brackets. */
function Corners() {
  const base = "pointer-events-none absolute h-6 w-6 border-accent/50";
  return (
    <>
      <span className={`${base} left-0 top-0 rounded-tl-xl border-l-2 border-t-2`} />
      <span className={`${base} right-0 top-0 rounded-tr-xl border-r-2 border-t-2`} />
      <span className={`${base} bottom-0 left-0 rounded-bl-xl border-b-2 border-l-2`} />
      <span className={`${base} bottom-0 right-0 rounded-br-xl border-b-2 border-r-2`} />
    </>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      index="02"
      watermark="About"
      eyebrow="whoami"
      title="A developer who ships end to end."
      intro={PROFILE.tagline}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Framed portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm self-start"
        >
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-accent/10 blur-2xl" />
          <div className="panel relative overflow-hidden rounded-3xl p-5">
            <div className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
              <span className="h-1.5 w-1.5 animate-glowpulse rounded-full bg-accent" />
              rec
            </div>
            <img
              src={aboutPic}
              alt="Harsh Patel"
              loading="lazy"
              className="w-full rounded-2xl"
            />
          </div>
          <Corners />
        </motion.div>

        {/* Bio */}
        <div>
          <p className="text-lg font-medium leading-relaxed text-ink sm:text-xl">
            {LEAD}
          </p>
          {BODY && (
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              {BODY}
            </p>
          )}

          <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FACTS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="keycap flex items-center gap-3 rounded-key px-4 py-3"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-keysm bg-accent/10 text-accent">
                  <Icon size={16} />
                </span>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide text-ink-faint">
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-ink">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
