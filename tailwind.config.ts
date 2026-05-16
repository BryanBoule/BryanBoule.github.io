import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx,mdx}',
    './components/**/*.{ts,tsx,js,jsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // RGB triplet stored in --accent so we can do bg-accent/10 etc.
        accent: 'rgb(var(--accent) / <alpha-value>)',
        ink: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          850: '#1f1f1f',
          900: '#171717',
          950: '#0a0a0a',
          990: '#050505',
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['Geist', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.18em',
      },
      animation: {
        'blink': 'blink 1s steps(2) infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.8', boxShadow: '0 0 10px rgb(var(--accent))' },
          '50%': { opacity: '1', boxShadow: '0 0 20px rgb(var(--accent))' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
