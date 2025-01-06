import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5DD3F7",
          secondary: "#F000B8", // You can customize other colors as needed
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          background : "#0A0D12"
        },
      },
    ],
  },
};
