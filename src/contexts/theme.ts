"use client";

import { createTheme } from "@mui/material/styles";
import { ibmPlexSansThai } from "@/config/fonts";
import { MuiAlert } from "@/styles/mui/alert";
import { MuiAutocomplete } from "@/styles/mui/autocomplete";
import { MuiButton } from "@/styles/mui/button";
import { MuiCheckbox } from "@/styles/mui/checkbox";
import { MuiPopper } from "@/styles/mui/popper";
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
    MuiAlert,
    MuiAutocomplete,
    MuiButton,
    MuiCheckbox,
    MuiTextField,
    MuiPopper,
  },
});
