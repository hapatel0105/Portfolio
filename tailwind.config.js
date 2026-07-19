/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#08080a",
        panel: "#0e0f13",
        ink: {
          DEFAULT: "#e7e7ea",
          muted: "#9a9ba3",
          faint: "#6b6c75",
        },
        key: {
          DEFAULT: "#16171d",
          face: "#1d1f27",
          edge: "#2a2c37",
          hi: "#3a3d4b",
        },
        accent: {
          DEFAULT: "#2dd4bf", // teal
          glow: "#5eead4",
          soft: "#134e4a",
        },
        neon: "#8b5cf6", // violet secondary
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        key: "12px",
        keysm: "9px",
      },
      boxShadow: {
        keycap:
          "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.55), 0 5px 0 0 #0a0b0e, 0 8px 16px rgba(0,0,0,0.55)",
        "keycap-hover":
          "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -3px 0 rgba(0,0,0,0.55), 0 5px 0 0 #0a0b0e, 0 10px 22px rgba(0,0,0,0.6)",
        "keycap-press":
          "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.5), 0 1px 0 0 #0a0b0e, 0 3px 8px rgba(0,0,0,0.5)",
        glow: "0 0 0 1px rgba(45,212,191,0.45), 0 0 26px rgba(45,212,191,0.28)",
        "glow-soft": "0 0 0 1px rgba(45,212,191,0.25), 0 0 18px rgba(45,212,191,0.16)",
      },
      keyframes: {
        caret: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        glowpulse: {
          "0%,100%": { boxShadow: "0 0 0 1px rgba(45,212,191,0.25), 0 0 14px rgba(45,212,191,0.12)" },
          "50%": { boxShadow: "0 0 0 1px rgba(45,212,191,0.5), 0 0 28px rgba(45,212,191,0.3)" },
        },
        risein: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        caret: "caret 1.1s steps(1) infinite",
        floaty: "floaty 6s ease-in-out infinite",
        glowpulse: "glowpulse 3.2s ease-in-out infinite",
        risein: "risein 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
