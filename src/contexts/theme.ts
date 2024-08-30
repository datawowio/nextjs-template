"use client";

import { createTheme } from "@mui/material/styles";
import { typography, MuiTypography } from "./typography";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography,
  components: {
    MuiTypography,
  },
});
