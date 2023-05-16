import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Helvetica']
    }
  },
  plugins: [require("daisyui")],
} satisfies Config;
