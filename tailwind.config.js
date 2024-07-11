/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },  
      colors: {
        lightBg: 'var(--lightBg)',
        lightColor: 'var(--lightColor)',
        darkBg: 'var(--darkBg)',
        darkColor: 'var(--darkColor)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        grey: 'var(--grey)',
        paleGrey: 'var(--paleGrey)',
        text: 'var(--text)',
      },
      backgroundImage: {
        'mountain': "url('assets/img/bg.jpg')",
      },
    },
  },
  plugins: [],
}

