/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,md}'],
  theme: {
    extend: {
      colors: {
        ink: '#17242C',
        navy: '#17242C',
        slate: '#2F3B42',
        teal: '#189CB4',
        cyan: '#2FC1D3',
        paper: '#ECEDEA',
        line: '#D9DAD5',
      },
      fontFamily: {
        display: ['"Shippori Mincho"', 'serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
        en: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
};
