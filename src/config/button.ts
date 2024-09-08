import { colors } from "./palette";
import { customVariantStyle } from "@/components/core/typography/styles";

import type { Components } from "@mui/material";

export const Button: Components["MuiButton"] = {
  styleOverrides: {
    root: {
      "boxShadow": "none",
      "&:hover": {
        boxShadow: "none",
      },
      "&.Mui-disabled": {
        "backgroundColor": colors.surface.default.disabled,
        "borderColor": colors.surface.default.disabled,
        "color": colors.text.placeholder.disabled,
        "&:hover": {
          backgroundColor: colors.surface.info.hover,
          border: "none",
        },
      },
    },
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        ...customVariantStyle["semiboldParagraphMD"],
        height: "40px",
      },
    },
    {
      props: { size: "medium" },
      style: {
        ...customVariantStyle["semiboldParagraphLG"],
        height: "44px",
      },
    },
    {
      props: { size: "large" },
      style: { ...customVariantStyle["boldHeadingSM"], height: "56px" },
    },
    {
      props: { color: "error", variant: "contained" },
      style: {
        "backgroundColor": colors.surface.error.default,
        "borderColor": colors.surface.error.default,
        "color": colors.base.white,
        "&:hover": {
          backgroundColor: colors.surface.error.hover,
          borderColor: colors.surface.error.hover,
        },
      },
    },
    {
      props: { color: "success", variant: "contained" },
      style: {
        "backgroundColor": colors.surface.primary.green,
        "borderColor": colors.surface.primary.green,
        "color": colors.base.white,
        "&:hover": {
          backgroundColor: colors.surface.primary.greenDarker,
          borderColor: colors.surface.primary.greenDarker,
        },
      },
    },
    {
      props: { color: "primary", variant: "outlined" },
      style: {
        "borderColor": colors.border.info.default,
        "color": colors.text.info.default,
        "&:hover": {
          backgroundColor: colors.surface.info.subdued,
          borderColor: colors.border.info.default,
        },
      },
    },
  ],
};
