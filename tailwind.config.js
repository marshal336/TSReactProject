/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mdl': '900px',
        'ldm': '480px',
        'grid': '1180px',
        'ssm': '340px'
      },
      fontFamily:{
        'poppins': ['poppins', 'sans-serif']
      },
      backgroundColor: {
        main: '#1E252B',
        mainTwo: '#FF6E30',
        input: 'rgba(255, 255, 255, 0.10)',
        primary: 'rgba(255, 255, 255, 0.05)',
      },
      colors: {
        main: '#FF6E30',
        second: 'rgba(255, 255, 255, 0.55)',
        hoverColor: 'rgba(40, 48, 54, 0.60)',
        threesColor: 'rgba(255, 255, 255, 0.90)',
        fourColor: 'rgba(255, 165, 55, 0.55)',
      },
      borderColor: {
        'br-color': 'rgba(255, 255, 255, 0.80)'
      },
      borderWidth: {
        'br-width-2': '2px'
      },
      borderRadius: {
        '15': '15px'
      }
    },
  },
  plugins: [],
}