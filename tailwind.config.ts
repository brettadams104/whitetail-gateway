import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hunt-orange': '#FF6600',
      },
    },
  },
  plugins: [],
}
export default config
