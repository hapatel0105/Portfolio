import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Copy, Check, CornerDownLeft } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CONTACT, SOCIALS } from "../constants";
import KeyButton from "./ui/KeyButton";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 py-20 sm:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="panel relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-20"
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-neon/10 blur-3xl" />

        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="cap-sm !px-2 !py-1 text-accent">07</span>
          <span className="legend">./contact --now</span>
        </div>
        <h2
          id="contact-title"
          className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl"
        >
          Let&apos;s build something{" "}
          <span className="grad-accent">worth shipping.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-muted">
          I&apos;m open to full-time roles, internships, and freelance work.
          Drop me a line and I&apos;ll get back to you.
        </p>

        {/* Primary actions */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <KeyButton
            href={`mailto:${CONTACT.email}`}
            variant="solid"
            className="px-6 py-3.5"
          >
            <CornerDownLeft size={16} /> {CONTACT.email}
          </KeyButton>
          <KeyButton onClick={copyEmail} variant="ghost" className="px-5 py-3.5">
            {copied ? (
              <>
                <Check size={16} className="text-accent" /> Copied
              </>
            ) : (
              <>
                <Copy size={16} /> Copy email
              </>
            )}
          </KeyButton>
        </div>

        {/* Details */}
        <div className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-3 text-sm text-ink-muted sm:flex-row sm:justify-center sm:gap-8">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-accent" /> {CONTACT.location}
          </span>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Phone size={14} className="text-accent" /> {CONTACT.phone}
          </a>
        </div>

        {/* Socials */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <SocialKey href={SOCIALS.github} label="GitHub">
            <FaGithub size={18} />
          </SocialKey>
          <SocialKey href={SOCIALS.linkedin} label="LinkedIn">
            <FaLinkedinIn size={18} />
          </SocialKey>
          <SocialKey href={SOCIALS.email} label="Email">
            <Mail size={18} />
          </SocialKey>
        </div>
      </motion.div>
    </section>
  );
}

function SocialKey({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="keycap keycap-hover keycap-press grid h-12 w-12 place-items-center rounded-key text-ink-muted transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
