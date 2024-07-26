import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#008000",
        tertiary: "#fffaa0",
      },
    },
  },
};
