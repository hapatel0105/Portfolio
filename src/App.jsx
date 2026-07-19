import { SmoothScrollProvider, useSmoothScroll } from "./hooks/useSmoothScroll";
import { useActiveSection } from "./hooks/useActiveSection";
import { NAV_SECTIONS } from "./constants";

import AmbientField from "./components/AmbientField";
import ScrollProgress from "./components/ScrollProgress";
import Chassis from "./components/Chassis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

const IDS = NAV_SECTIONS.map((s) => s.id);

/** /zeroz-style scroll-progress dot rail. */
function SideDots({ active }) {
  const { scrollTo } = useSmoothScroll();
  return (
    <ul className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {NAV_SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <li key={s.id}>
            <button
              onClick={() => scrollTo(`#${s.id}`)}
              aria-label={`Go to ${s.label}`}
              aria-current={isActive ? "true" : undefined}
              className="group relative grid h-6 w-6 place-items-center"
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "h-3 w-3 bg-accent shadow-glow"
                    : "h-2 w-2 bg-key-edge group-hover:bg-ink-faint"
                }`}
              />
              <span className="pointer-events-none absolute right-7 whitespace-nowrap rounded-keysm bg-panel px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-muted opacity-0 shadow-keycap transition-opacity group-hover:opacity-100">
                {s.key} · {s.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function Shell() {
  const active = useActiveSection(IDS);

  return (
    <>
      {/* Skip link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-keysm focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#04211d]"
      >
        Skip to content
      </a>

      {/* Persistent cinematic layers */}
      <ScrollProgress />
      <AmbientField />
      <Chassis active={active} />
      <Navbar active={active} />
      <SideDots active={active} />

      {/* One continuous top-to-bottom scroll */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <p aria-live="polite" className="sr-only">
        {NAV_SECTIONS.find((s) => s.id === active)?.label} section
      </p>
    </>
  );
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <Shell />
    </SmoothScrollProvider>
  );
}
