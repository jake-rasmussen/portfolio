import { type Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      baloo: ["var(--font-baloo)", ...fontFamily.sans],
      montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      raleway: ["var(--font-raleway)", ...fontFamily.sans]
    }
  },
  plugins: [require("daisyui")],
} satisfies Config;
