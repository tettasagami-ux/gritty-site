/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1F2B',
        panel: '#14293A',
        teal: '#0FA894',
        cyan: '#35D6DB',
        gold: '#C8A45D',
        cream: '#F4F0E8',
        line: '#E3DCCE',
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
