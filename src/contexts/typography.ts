import { IBM_Plex_Sans_Thai } from "next/font/google";

import type { Components, Theme } from "@mui/material";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const ibm = IBM_Plex_Sans_Thai({
  weight: ["200", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-ibm",
});

export const typography: TypographyOptions = {
  "h4": {
    color: "var(--text-secondary)",
    fontSize: "0.75rem",
    fontWeight: "400",
  },
  "subtitle2": {
    color: "var(--text-primary)",
    fontSize: "0.75rem",
  },
  "regular-displayLG": {
    fontSize: "var(--font-size-0)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-0)",
    letterSpacing: "-0.4px",
  },
  "regular-displayMD": {
    fontSize: "var(--font-size-1)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-1)",
  },
  "regular-headingLG": {
    fontSize: "var(--font-size-2)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-2)",
  },
  "regular-headingMD": {
    fontSize: "var(--font-size-3)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-3)",
  },
  "regular-headingSM": {
    fontSize: "var(--font-size-4)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-4)",
  },
  "regular-subheading": {
    fontSize: "var(--font-size-5)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-5)",
  },
  "regular-paragraphLG": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
  },
  "regular-paragraphMD": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
  },
  "regular-paragraphSM": {
    fontSize: "var(--font-size-8)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-8)",
  },
  "regular-captionLG": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
    textTransform: "uppercase",
  },
  "regular-captionMD": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
    textTransform: "uppercase",
  },
  "regular-linkMD": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
    textDecorationLine: "underline",
  },
  "regular-linkSM": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-regular)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
    textDecorationLine: "underline",
  },
  "medium-displayLG": {
    fontSize: "var(--font-size-0)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-0)",
    letterSpacing: "-0.4px",
  },
  "medium-displayMD": {
    fontSize: "var(--font-size-1)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-1)",
  },
  "medium-headingLG": {
    fontSize: "var(--font-size-2)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-2)",
  },
  "medium-headingMD": {
    fontSize: "var(--font-size-3)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-3)",
  },
  "medium-headingSM": {
    fontSize: "var(--font-size-4)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-4)",
  },
  "medium-subHeading": {
    fontSize: "var(--font-size-5)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-5)",
  },
  "medium-paragraphLG": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
  },
  "medium-paragraphMD": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
  },
  "medium-paragraphSM": {
    fontSize: "var(--font-size-8)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-8)",
  },
  "medium-captionLG": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
    textTransform: "uppercase",
  },
  "medium-captionMD": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
    textTransform: "uppercase",
  },
  "medium-linkMD": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
    textDecorationLine: "underline",
  },
  "medium-linkSM": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-medium)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
    textDecorationLine: "underline",
  },
  "semibold-displayLG": {
    fontSize: "var(--font-size-0)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-0)",
    textTransform: "uppercase",
    letterSpacing: " -0.4px",
  },
  "semibold-displayMD": {
    fontSize: "var(--font-size-1)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-1)",
  },
  "semibold-headingLG": {
    fontSize: "var(--font-size-2)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-2)",
  },
  "semibold-headingMD": {
    fontSize: "var(--font-size-3)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-3)",
  },
  "semibold-headingSM": {
    fontSize: "var(--font-size-4)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-4)",
  },
  "semibold-subHeading": {
    fontSize: "var(--font-size-5)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-5)",
  },
  "semibold-paragraphLG": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
  },
  "semibold-paragraphMD": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
  },
  "semibold-paragraphSM": {
    fontSize: "var(--font-size-8)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-8)",
  },
  "semibold-captionLG": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
    textTransform: "uppercase",
  },
  "semibold-captionMD": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
    textTransform: "uppercase",
  },
  "semibold-linkMD": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
    textDecorationLine: "underline",
  },
  "semibold-linkSM": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-semibold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
    textDecorationLine: "underline",
  },
  "bold-displayLG": {
    fontSize: "var(--font-size-0)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-0)",
    letterSpacing: "-0.4px",
  },
  "bold-displayMD": {
    fontSize: "var(--font-size-1)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-1)",
    letterSpacing: "-0.32px",
  },
  "bold-headingLG": {
    fontSize: "var(--font-size-2)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-2)",
  },
  "bold-headingMD": {
    fontSize: "var(--font-size-3)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-3)",
  },
  "bold-headingSM": {
    fontSize: "var(--font-size-4)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-4)",
  },
  "bold-subHeading": {
    fontSize: "var(--font-size-5)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-5)",
  },
  "bold-paragraphLG": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
  },
  "bold-paragraphMD": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
  },
  "bold-paragraphSM": {
    fontSize: "var(--font-size-8)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-8)",
  },
  "bold-captionLG": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
    textTransform: "uppercase",
  },
  "bold-captionMD": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
    textTransform: "uppercase",
  },
  "bold-linkMD": {
    fontSize: "var(--font-size-6)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-6)",
    textDecorationLine: "underline",
  },
  "bold-linkSM": {
    fontSize: "var(--font-size-7)",
    fontWeight: "var(--font-weight-bold)",
    fontStyle: "normal",
    lineHeight: "var(--line-height-7)",
    textDecorationLine: "underline",
  },
};

export const MuiTypography: Components<
  Omit<Theme, "components">
>["MuiTypography"] = {
  styleOverrides: {
    root: {
      fontFamily: ibm.style.fontFamily,
    },
  },
  variants: [
    {
      props: { variant: "regular-paragraphMD", color: "textBrandHeader" },
      style: {
        // color: palette.textBrandHeader.main,
      },
    },
    {
      props: { variant: "medium-paragraphSM", color: "textBrandHeader" },
      style: {
        // color: palette.textBrandHeader.main,
      },
    },
    {
      props: {
        variant: "bold-displayMD",
        color: "textPlaceholderError",
      },
      style: {
        // color: palette.textPlaceholderError.main,
      },
    },
  ],
};
