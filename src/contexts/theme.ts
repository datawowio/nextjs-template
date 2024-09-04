"use client";

import { createTheme } from "@mui/material/styles";
import { ibmPlexSansThai } from "@/config/fonts";
import { customPalette } from "@/config/palette";

const defaultTheme = createTheme();
const fontFamily = [
  ibmPlexSansThai.style.fontFamily,
  defaultTheme.typography.fontFamily,
].join(",");

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...customPalette,
  },
  typography: {
    fontFamily,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...customPalette,
  },
  typography: {
    fontFamily,
  },
});
