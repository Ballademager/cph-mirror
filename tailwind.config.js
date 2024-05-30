import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "dark-blue": "var(--dark-blue)",
      "cph-blue": "var(--cph-blue)",
      "light-blue": "var(--light-blue)",
      "dark-yellow": "var(--dark-yellow)",
      "cph-yellow": "var(--cph-yellow)",
      "light-yellow": "var(--light-yellow)",
      "cph-white": "var(--cph-white)",
      "grey-lighter": "var(--grey-lighter)",
      "grey-light": "var(--grey-light)",
      "grey-mid": "var(--grey-mid)",
      "grey-dark": "var(--grey-dark)",
      "grey-text": "var(--grey-text)",
    },
    fontSize: {
      1: "var(--fs-1)",
      2: "var(--fs-2)",
      3: "var(--fs-3)",
      4: "var(--fs-4)",
      5: "var(--fs-5)",
      6: "var(--fs-6)",
      large: "var(--fs-large)",
      p: "var(--fs-p)",
      small: "var(--fs-small)",
      smaller: "var(--fs-smaller)",
    },
    extend: {
      boxShadow: {
        card: "rgba(7, 19, 66, 0.15) 0 5px 20px",
        cardHover: "rgba(7, 19, 66, 0.35) 0 5px 20px",
        cardMedium: "rgba(7, 19, 66, 0.25) 0 5px 20px",
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
};
