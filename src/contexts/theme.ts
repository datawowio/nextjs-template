"use client";

import { createTheme } from "@mui/material/styles";
import { ibmPlexSansThai } from "@/config/fonts";
import { MuiButton } from "@/styles/mui/button";
import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";

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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput": {
            lineHeight: "1.5rem",
          },
          "& .MuiOutlinedInput-input": {
            padding: "0.75rem 0.875rem",
            height: "1.5rem",
            ...customVariantStyle["regularParagraphLG"],
          },
          "&. MuiOutlinedInput-input & .Mui-disabled": {
            backgroundColor: colors.surface.placeholder.disabled,
            color: colors.text.placeholder.disabled,
            borderColor: colors.border.placeholder.disabled,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "height": "1.5rem",
          "marginTop": "-0.25rem",
          ...customVariantStyle["regularParagraphLG"],
          "&.MuiInputLabel-shrink": {
            marginTop: "0",
          },
          "&.Mui-disabled": {
            background: "transparent",
            color: colors.text.placeholder.disabled,
          },
        },
      },
    },
  },
});
