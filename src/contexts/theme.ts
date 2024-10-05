"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { notoSansThai, roboto } from "@/config/fonts";

export const fontFamily = [
  roboto.style.fontFamily,
  notoSansThai.style.fontFamily,
  // We intend to use the fonts listed below under the `font-sans` class name from the Tailwind framework.
  // We believe these fonts make sense as fallback options.
  // Reference: https://tailwindcss.com/docs/font-family
  "ui-sans-serif",
  "system-ui",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji",
].join(", ");

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily,
    },
  }),
);

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily,
    },
  }),
);
