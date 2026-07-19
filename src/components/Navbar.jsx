import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NAV_SECTIONS, SOCIALS } from "../constants";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { cn } from "../lib/utils";
import logo from "../assets/logo-s.png";

/**
 * Function-row navigation. Each section is a physical key labelled F1..F7;
 * the active section's key lights up as you scroll. Clicking a key (or
 * pressing 1-7) smooth-scrolls to that section.
 */
function Navbar({ active }) {
  const { scrollTo } = useSmoothScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (id) => {
    scrollTo(`#${id}`);
    setMobileOpen(false);
  };

  // Keyboard shortcuts: press 1-7 to jump to a section.
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= NAV_SECTIONS.length) {
        e.preventDefault();
        scrollTo(`#${NAV_SECTIONS[n - 1].id}`);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className="panel mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-2.5 sm:px-4"
      >
        {/* Brand key */}
        <button
          onClick={() => go("home")}
          className="keycap keycap-hover keycap-press flex items-center gap-2.5 rounded-keysm px-3 py-1.5"
          aria-label="Harsh Patel — home"
        >
          <img src={logo} alt="Harsh Patel logo" className="h-8 w-auto" />
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            Harsh Patel
          </span>
        </button>

        {/* Function-row (desktop) */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group relative rounded-keysm px-3 py-2 text-sm transition-colors",
                    "keycap-press",
                    isActive
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink"
                  )}
                >
                  <span className="absolute right-1 top-0.5 font-mono text-[8px] text-ink-faint">
                    {s.key}
                  </span>
                  {s.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-keysm border border-accent/40 bg-accent/10 shadow-glow-soft"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Socials + mobile trigger */}
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            <IconLink href={SOCIALS.github} label="GitHub">
              <FaGithub size={15} />
            </IconLink>
            <IconLink href={SOCIALS.linkedin} label="LinkedIn">
              <FaLinkedinIn size={15} />
            </IconLink>
            <IconLink href={SOCIALS.email} label="Email">
              <Mail size={16} />
            </IconLink>
          </div>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="keycap keycap-press ml-1 grid h-9 w-9 place-items-center rounded-keysm lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="panel mx-auto mt-2 max-w-6xl p-2 lg:hidden"
          >
            <ul className="grid grid-cols-2 gap-2">
              {NAV_SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => go(s.id)}
                    className={cn(
                      "keycap keycap-press flex w-full items-center justify-between rounded-keysm px-3 py-2.5 text-sm",
                      active === s.id ? "text-accent" : "text-ink-muted"
                    )}
                  >
                    {s.label}
                    <span className="font-mono text-[9px] text-ink-faint">
                      {s.key}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-center gap-2 border-t border-white/5 pt-2">
              <IconLink href={SOCIALS.github} label="GitHub">
                <FaGithub size={15} />
              </IconLink>
              <IconLink href={SOCIALS.linkedin} label="LinkedIn">
                <FaLinkedinIn size={15} />
              </IconLink>
              <IconLink href={SOCIALS.email} label="Email">
                <Mail size={16} />
              </IconLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="keycap keycap-press grid h-9 w-9 place-items-center rounded-keysm text-ink-muted transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
export default Navbar;