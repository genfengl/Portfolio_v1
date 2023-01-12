/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '390px'
      },
      transitionProperty: {
        'hamburger': 'transform, opacity'
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
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        gradientAnimation: {
          '0, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        blink: {
          '0, 25%, 75%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
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
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fastSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(720deg)' },
        },
        smallBounce: {
          '0%, 100%': {
            transform: 'translateY(-3%)',
          },
          '50%': {
            transform: 'translateY(3%)',
          }
        },
        jsIconAnimation: {
          '0%, 100%': {
            transform: 'scale(100%)',
          },
          '50%': {
            transform: 'scale(105%)',
          }
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
            opacity: 0,
          },
          '100%': {
            opacity: 100,
          }
        },
        catPhotosCrossfade0: {
          '0%': {
            opacity: 1
          },
          '11.1%': {
            opacity: 1
          },
          '16.67%': {
            opacity: 0
          },
          '94.44%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        catPhotosCrossfade1: {
          '0%': {
            opacity: 0
          },
          '11.1%': {
            opacity: 0
          },
          '16.67%': {
            opacity: 1
          },
          '27.77%': {
            opacity: 1
          },
          '33.33%': {
            opacity: 0
          },
          '100%': {
            opacity: 0
          }
        },
        catPhotosCrossfade2: {
          '0%': {
            opacity: 0
          },
          '27.77%': {
            opacity: 0
          },
          '33.33%': {
            opacity: 1
          },
          '44.44%': {
            opacity: 1
          },
          '50%': {
            opacity: 0
          },
          '100%': {
            opacity: 0
          }
        },
        catPhotosCrossfade3: {
          '0%': {
            opacity: 0
          },
          '44.44%': {
            opacity: 0
          },
          '50%': {
            opacity: 1
          },
          '61.11%': {
            opacity: 1
          },
          '66.67%': {
            opacity: 0
          },
          '100%': {
            opacity: 0
          }
        },
        catPhotosCrossfade4: {
          '0%': {
            opacity: 0
          },
          '61.11%': {
            opacity: 0
          },
          '66.67%': {
            opacity: 1
          },
          '77.78%': {
            opacity: 1
          },
          '83.33%': {
            opacity: 0
          },
          '100%': {
            opacity: 0
          }
        },
        catPhotosCrossfade5: {
          '0%': {
            opacity: 0
          },
          '77.78%': {
            opacity: 0
          },
          '83.33%': {
            opacity: 1
          },
          '94.44%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        }
      },

      animation: {
        slide: 'slide 6s linear infinite',
        gradientAnimation: 'gradientAnimation 3s ease-in-out infinite ',
        blink: 'blink 1s ease-in-out infinite',
        wave: 'wave 3s ease-in-out infinite',
        slowSpin: 'slowSpin 8s linear infinite',
        fastSpin: 'fastSpin 1s linear 10',
        smallBounce: 'smallBounce 2s ease-in-out infinite',
        jsIconAnimation: 'jsIconAnimation 2s ease-in-out infinite',
        play: 'play 11s ease-in-out infinite',
        playSmall: 'playSmall 14s ease-in-out infinite',
        skillsAnimation: 'skillsAnimation 1s ease-in-out 1',
        skills1Animation: 'skillsAnimation 2s ease-in-out 1',
        skills2Animation: 'skillsAnimation 3s ease-in-out 1',
        skills3Animation: 'skillsAnimation 4s ease-in-out 1',
        catPhotos: 'catPhotos 8s ease-in-out infinite',
        catPhotosCrossfade0: 'catPhotosCrossfade0 48s linear infinite',
        catPhotosCrossfade1: 'catPhotosCrossfade1 48s linear infinite',
        catPhotosCrossfade2: 'catPhotosCrossfade2 48s linear infinite',
        catPhotosCrossfade3: 'catPhotosCrossfade3 48s linear infinite',
        catPhotosCrossfade4: 'catPhotosCrossfade4 48s linear infinite',
        catPhotosCrossfade5: 'catPhotosCrossfade5 48s linear infinite',
      },

      transitionDelay: {
        '300': '300ms',
        '600': '600ms',
        '900': '900ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
        '6000': '6000ms',
        '12000': '12000ms',
        '18000': '18000ms',
        '24000': '24000ms',
        '30000': '30000ms',
      },

      animationDelay: {

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
