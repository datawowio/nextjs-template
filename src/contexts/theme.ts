"use client";

import { createTheme } from "@mui/material/styles";
import { ibmPlexSansThai } from "@/config/fonts";
import { Button as MuiButton } from "@/config/button";

const defaultTheme = createTheme();
const fontFamily = [
  ibmPlexSansThai.style.fontFamily,
  defaultTheme.typography.fontFamily,
].join(",");

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily,
  },
  components: {
    MuiButton,
  },
});
