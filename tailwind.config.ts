import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./assets/main-bg.jpg')",
      },
    },
  },
  plugins: [],
}

export default config
