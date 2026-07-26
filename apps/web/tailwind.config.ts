import type { Config } from "tailwindcss";


const config: Config = {

  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],


  theme: {

    extend: {

      colors: {

        cyber: {
          black: "#050505",
          cyan: "#00E5FF",
          red: "#FF1744",
          silver: "#C0C0C0",
        },

      },


      backgroundImage: {

        "cyber-gradient":
          "linear-gradient(135deg,#00E5FF,#FF1744)",

        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",

      },


      boxShadow: {

        neon:
          "0 0 25px rgba(0,229,255,0.5)",

        redGlow:
          "0 0 25px rgba(255,23,68,0.5)",

      },


      animation: {

        float:
          "float 4s ease-in-out infinite",

        glow:
          "glow 2s ease-in-out infinite",

        slideUp:
          "slideUp 0.6s ease",

      },


      keyframes: {

        float: {

          "0%,100%": {
            transform:
              "translateY(0)",
          },

          "50%": {
            transform:
              "translateY(-15px)",
          },

        },


        glow: {

          "0%,100%": {
            opacity: "0.6",
          },

          "50%": {
            opacity: "1",
          },

        },


        slideUp: {

          from: {
            opacity: "0",
            transform:
              "translateY(30px)",
          },

          to: {
            opacity: "1",
            transform:
              "translateY(0)",
          },

        },

      },

    },

  },


  plugins: [],

};


export default config;
