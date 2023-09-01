/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'purple': '#891DF5',
      'pink': '#EA5DD6',
      'white': '#ffffff',
      'gray': '#D4D2D5',
      'grayvariant': '#F7F6F7',
      'gray-building': '#AEA8B4',
      'border-button': '#4A4A4A',
      'color-inactive': '#B674F878',
      'card-inactive': 'rgba(200, 147, 252)',
      'card-active': '#9B38FF',
      'card': '#231729',
      'background': '#210C2C',
      'background-dark': '#131214',
      'border-project': 'rgba(218, 186, 250, 0.25)',
      'scroll': '#211826'
    },
    backgroundImage: {
      'card-gradient': 'linear-gradient(180deg, #370F4A 0%, rgba(63, 16, 86, 0.00) 100%)',
      'button-goback-gradient': 'linear-gradient(180deg, #370F4A 0%, rgba(63, 16, 86, 0.00) 100%)',
      'button-gradient': 'linear-gradient(215deg, #891DF5 0%, rgba(137, 29, 245, 0.00) 100%)',
      'social-gradient': 'linear-gradient(0deg, rgba(74, 71, 77, 0.20) 0%, rgba(255, 233, 233, 0.00) 100%), linear-gradient(180deg, rgba(208, 201, 215, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%)',
    },
    boxShadow: {
      'social': '0px 2px 0px 0px rgba(0, 0, 0, 0.25)',
      'button': '0px 3.8181817531585693px 4.581818103790283px 0px rgba(255, 255, 255, 0.25) inset, 0px 9.163636207580566px 3.0545454025268555px 0px rgba(251, 247, 255, 0.12) inset',
      'active-hover': '0px 5px 6px 0px rgba(255, 255, 255, 0.25) inset, 0px -9px 23px 0px rgba(52, 14, 90, 0.88) inset, 0px 12px 4px 0px rgba(251, 247, 255, 0.12) inset, 0px 4px 31px 0px rgba(128, 42, 214, 0.76)'
    },
    fontFamily: {
      'chakra-petch': ['Chakra Petch', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-16deg)' },
          '50%': { transform: 'rotate(16deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
