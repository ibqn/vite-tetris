import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./assets/main-bg.jpg')",
      },
      boxShadow: {
        glow: '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe',
      },
      keyframes: {
        pulsate: {
          from: {
            textShadow:
              '0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 10px #bc13fe, 0 0 45px #bc13fe, 0 0 55px #bc13fe, 0 0 70px #bc13fe, 0 0 80px #bc13fe',
          },
          to: {
            textShadow:
              '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #bc13fe, 0 0 80px #bc13fe, 0 0 90px #bc13fe, 0 0 100px #bc13fe, 0 0 150px #bc13fe',
          },
        },
      },
      animation: {
        pulsate: 'pulsate 1.5s infinite alternate',
      },
    },
  },

  plugins: [],
}

export default config
