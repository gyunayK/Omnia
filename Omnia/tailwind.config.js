/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://ik.imagekit.io/riviaa/Omnia/hero.png?updatedAt=1691465281220')",
        'logo': "url('https://ik.imagekit.io/riviaa/Omnia/A_letter_tech_logo_2.png?updatedAt=1691831497528')",
        'service_ph': "url('https://ik.imagekit.io/riviaa/Omnia/service_PH.png?updatedAt=1691470287166')",
        'about_us': "url('https://ik.imagekit.io/riviaa/Omnia/1a948d4141e3570dc27abff171bc8d8d.jpg?updatedAt=1691623348753')",
      },
      fontFamily: {

        Archivo: ['Archivo', 'sans-serif'],
        Tektur: ['Tektur', 'sans-serif'],
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
      },
    },
    screens: {
      'xs': '375px',
      'xs-max': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max': '2000px'
    },
  },
  plugins: [],
}

