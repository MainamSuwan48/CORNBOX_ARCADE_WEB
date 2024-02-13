/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fdd619",

          secondary: "#00FED7",

          accent: "#B2AB99",

          neutral: "#F5F5F5",

          "base-100": "#1e1e1e",

          info: "#fde047",

          success: "#84cc16",

          warning: "#f59e0b",

          error: "#dc2626",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        Main: 'HK Grotesk, sans-serif',
      },
      height: {
        with_header: "calc(100vh - 100px)",
      },
    },
  },
  plugins: [require("daisyui")],
};
