/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
         colors: {
        err: "#F56767",
        green: "#56CC5B",
        blue_light: "#2684FFCC",
        icon: "rgba(227, 239, 255, 0.7)",
        blurBg: "rgba(0, 0, 0, 0.08)",
        gray:"red",
        mainColor: "#023E8ACC",
        secondMainColor: "#025E8AB1",
        bg_mainLayout: "#E9EDF7",
        borderMainColor: "#F4F7FE",
        whiteColor_FFF: "#FFFFFF",
        textGray: "#9CA3AFB2",
        textColor__2: "rgba(78, 85, 86, 1)",
      },
          fontFamily: {
        cairo: ['"Cairo"', "sans-serif"],
      },
      backgroundImage: {
        HomePageBgImage: "url('../src/assets/Pattern.png')",
      }
    },
  },
  plugins: [],
}