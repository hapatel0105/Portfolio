import { NAV_SECTIONS } from "../constants";

/**
 * The persistent hardware frame. This is fixed to the viewport and never
 * scrolls — content moves *inside* it, so the whole page reads as one
 * continuous keyboard chassis. Purely decorative (pointer-events: none)
 * except nothing interactive lives here; the nav sits above it.
 */
function Screw({ className }) {
  return (
    <span
      className={`absolute h-2.5 w-2.5 rounded-full bg-key-edge shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.6)] ${className}`}
    >
      <span className="absolute left-1/2 top-1/2 h-[1px] w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black/50" />
    </span>
  );
}

export default function Chassis({ active }) {
  const activeSection =
    NAV_SECTIONS.find((s) => s.id === active) ?? NAV_SECTIONS[0];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40">
      {/* Outer bezel */}
      <div className="absolute inset-1.5 rounded-[26px] border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_0_80px_rgba(0,0,0,0.55)] sm:inset-3 sm:rounded-[32px]">
        {/* Corner screws */}
        <Screw className="left-3 top-3" />
        <Screw className="right-3 top-3" />
        <Screw className="bottom-3 left-3" />
        <Screw className="bottom-3 right-3" />

        {/* Top ambient light bar */}
        <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        {/* Bottom "spacebar" status strip */}
        <div className="absolute inset-x-0 bottom-4 hidden justify-center sm:flex">
          <div className="flex items-center gap-3 rounded-full border border-white/5 bg-panel/70 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-glowpulse rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-faint">
              layer
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              {activeSection.key} · {activeSection.label}
            </span>
          </div>
        </div>

        {/* Copyright + navigation hint */}
        <span className="absolute bottom-5 left-6 hidden font-mono text-[10px] text-ink-faint lg:block">
          © 2026 Harsh Patel
        </span>
        <span className="absolute bottom-5 right-6 hidden font-mono text-[10px] text-ink-faint lg:block">
          scroll / ↑ ↓ / 1–7 to navigate
        </span>
      </div>

      {/* Faint scanline texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}
