import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-start': '#a78bfa',
        'accent-end': '#34d399',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
} satisfies Config
