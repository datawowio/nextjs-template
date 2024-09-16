"use client";

import { createTheme } from "@mui/material/styles";
import { ibmPlexSansThai } from "@/config/fonts";
import { MuiButton } from "@/styles/mui/button";
import { MuiCheckbox } from "@/styles/mui/checkbox";
import { MuiTextField } from "@/styles/mui/text-field";

const defaultTheme = createTheme();
const fontFamily = [
  ibmPlexSansThai.style.fontFamily,
  defaultTheme.typography.fontFamily?.replace(/"Roboto",\s/, " "),
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
    MuiCheckbox,
    MuiTextField,
  },
});
