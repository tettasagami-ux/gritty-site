/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A2B33',
        navy: '#0E1F2B',
        teal: '#0E9AAB',
        cyan: '#35D6DB',
        paper: '#F6F7F8',
        line: '#E5E8EA',
      },
      fontFamily: {
        display: ['"Zen Kaku Gothic New"', 'sans-serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
        en: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
