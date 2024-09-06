import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  brandImage: `${process.env.NEXT_PUBLIC_BASE_STORYBOOK_URL}/datawow.svg`,
  brandTitle: "Data Wow Storybook",
  brandTarget: "_self",
  brandUrl: process.env.NEXT_PUBLIC_BASE_STORYBOOK_URL,
});
