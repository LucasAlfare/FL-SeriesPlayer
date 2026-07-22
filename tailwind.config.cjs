/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#0b1220",
        surface: "#111a2e",
        surfaceSoft: "#18233d",
        accent: "#7dd3fc",
        accentStrong: "#38bdf8",
        textPrimary: "#e5eefc",
        textMuted: "#8ea1c1"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(56, 189, 248, 0.18)"
      }
    }
  },
  plugins: []
};
