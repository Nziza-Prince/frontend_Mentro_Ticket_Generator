import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'hsl(0, 0%, 100%)',
          300: 'hsl(252, 6%, 83%)',
          500: 'hsl(245, 15%, 58%)',
          700: 'hsl(245, 19%, 35%)',
          900: 'hsl(248, 70%, 10%)',
        },
        orange: {
          500: 'hsl(7, 88%, 67%)',
          700: 'hsl(7, 71%, 60%)',
        },
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, hsl(7, 86%, 67%), hsl(0, 0%, 100%))',
      },
      fontFamily: {
        inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        label: '20px',
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
} satisfies Config;
