import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#fff1f2","100":"#ffe4e6","200":"#fecdd3","300":"#fda4af","400":"#fb7185","500":"#f43f5e","600":"#e11d48","700":"#be123c","800":"#9f1239","900":"#881337","950":"#4c0519"}
      }
    },
    fontFamily: {
      'body': [
    'Nunito Sans', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Nunito Sans', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    }
  },


  plugins: [flowbite.plugin()],
};
export default config;
