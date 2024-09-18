"use client";

import { createTheme } from "@mui/material/styles";

import { ibmPlexSansThai } from "@/config/fonts";

import { MuiAlert } from "@/styles/mui/alert";
import { MuiAutocomplete } from "@/styles/mui/autocomplete";
import { MuiButton } from "@/styles/mui/button";
import { MuiCard } from "@/styles/mui/card";
import { MuiCheckbox } from "@/styles/mui/checkbox";
import { MuiDialog } from "@/styles/mui/dialog";
import { MuiFormControlLabel } from "@/styles/mui/form-control-label";
import { MuiInputLabel } from "@/styles/mui/input-label";
import { MuiOutlinedInput } from "@/styles/mui/outlined-input";
import { MuiPagination } from "@/styles/mui/pagination";
import { MuiPopper } from "@/styles/mui/popper";

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
    MuiCard,
    MuiCheckbox,
    MuiDialog,
    MuiFormControlLabel,
    MuiInputLabel,
    MuiOutlinedInput,
    MuiPagination,
    MuiPopper,
  },
});
