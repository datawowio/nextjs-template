import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  brandImage: "https://datawowio.github.io/nextjs-template/datawow.svg",
  brandTitle: "Data Wow Storybook",
  brandTarget: "_self",
  brandUrl:
    process.env.NODE_ENV === "production"
      ? "https://datawowio.github.io/nextjs-template"
      : "http://localhost:6006",
});
