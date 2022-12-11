/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '390px'
      },

      colors: {
        // primary: '#1e293b',
        materialBlack: '#121212',
        word: '#fafafa',
        dream1: '#9CECFB',
        dream2: '#65C7F7',
        dream3: '#0052D4',
      },
      
      keyframes: {
        gradientAnimation: {
          '0, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        blink: {
          '0, 25%, 75%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        play: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(20px, -18px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          }
        },
        playSmall: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -20px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-30px, 30px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          }
        },
        skillsAnimation: {
          '0%': {
            opacity:0,
            
          },
          '100%': {
            opacity:100,
          }

        }
        
      },
      animation: {
        gradientAnimation: 'gradientAnimation 3s ease-in-out infinite ',
        blink: 'blink 1s ease-in-out infinite ',
        wave: 'wave 3s ease-in-out infinite',
        play: 'play 11s ease-in-out infinite',
        playSmall: 'playSmall 14s ease-in-out infinite',
        skillsAnimation: 'skillsAnimation 1s ease-in-out 1',
        skills1Animation: 'skillsAnimation 2s ease-in-out 1',
        skills2Animation: 'skillsAnimation 3s ease-in-out 1',
        skills3Animation: 'skillsAnimation 4s ease-in-out 1',
      },
      
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
      },

      backgroundSize: {
        'size-200': '200% 200%',
      },

      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },

    },
  },
  plugins: [],
}
