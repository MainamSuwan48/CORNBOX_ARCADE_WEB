/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fdd619",

          secondary: "#5A5AF4",

          accent: "#ec4899",

          neutral: "#ffffff",

          "base-100": "#111827",

          info: "#fde047",

          success: "#84cc16",

          warning: "#f59e0b",

          error: "#dc2626",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
