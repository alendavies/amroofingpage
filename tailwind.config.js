/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
    "./node_modules/flyonui/dist/js/*.js",
    "../path/to/raty-js/**/*.js",
  ],
  theme: {
    colors: {
      blue: "#3b769b",
      dark: "#336079",
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: colors.yellow,
      orange: colors.orange, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
      sky: colors.sky, // Used for background color
      amber: colors.amber, // Used for hover effect
    },
    extend: {},
  },
  flyonui: {
    themes: ["corporate"],
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("flyonui"),
    require("flyonui/plugin"),
  ],
};
