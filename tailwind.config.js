/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-instrument)', 'Inter', 'sans-serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
        instrument: ['var(--font-instrument)', 'sans-serif'],
        chivo: ['var(--font-chivo)', 'monospace'],
        mono: ['var(--font-chivo)', 'monospace'],
        display: ['var(--font-archivo)', 'sans-serif'],
        deathstar: ['"Death Star"', 'var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
