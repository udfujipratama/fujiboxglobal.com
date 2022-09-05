module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        corporate: {
          ...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
          primary: '#2f5f99',
          'primary-focus': '#436fa3',
          '--rounded-box': '1rem',
          '--rounded-btn': '0.5rem',
          '--rounded-badge': '1.9rem',
          '--border-btn': '0',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
  theme: {
    extend: {
      h2: {
        marginTop: '0px',
      },
      container: {
        center: true,
      },
      minHeight: {
        hero: '500px',
      },
      colors: {
        fujibox: '#2f5f99',
        whatsapp: '#48BB78',
      },
      scale: {
        30: '.3',
      },
    },
  },
}
