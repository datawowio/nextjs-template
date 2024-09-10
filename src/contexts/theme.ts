"use client";

import { createTheme } from "@mui/material/styles";
import { ibmPlexSansThai } from "@/config/fonts";
import { MuiButton } from "@/styles/mui/button";
import { MuiFormLabel } from "@/styles/mui/form-label";
import { MuiOutlinedInput } from "@/styles/mui/outlined-input";
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
    MuiTextField,
    MuiOutlinedInput,
    MuiFormLabel,
  },
});
