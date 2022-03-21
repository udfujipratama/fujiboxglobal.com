module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        corporate: {
          ...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
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
      colors: {
        whatsapp: '#48BB78',
      },
    },
  },
}
