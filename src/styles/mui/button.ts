import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";

import type { Components } from "@mui/material";

const disabledContainedStyle = {
  "backgroundColor": colors.surface.default.disabled,
  "borderColor": colors.surface.default.disabled,
  "color": colors.text.placeholder.disabled,
  "&:hover": {
    backgroundColor: colors.surface.info.hover,
    border: "none",
  },
};

const disabledTextStyle = {
  "backgroundColor": "transparent",
  "color": colors.text.placeholder.disabled,
  "&:hover": {
    backgroundColor: "transparent",
  },
};

export const MuiButton: Components["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      "boxShadow": "none",
      "&:hover": {
        boxShadow: "none",
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
        "&.Mui-disabled": disabledContainedStyle,
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
        "&.Mui-disabled": disabledContainedStyle,
      },
    },
    {
      props: { color: "primary", variant: "contained" },
      style: {
        "backgroundColor": colors.surface.info.default,
        "&:hover": {
          backgroundColor: colors.surface.info.hover,
          borderColor: colors.surface.info.hover,
        },
        "&.Mui-disabled": disabledContainedStyle,
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
        "&.Mui-disabled": disabledContainedStyle,
      },
    },
    {
      props: { variant: "text" },
      style: {
        "backgroundColor": "transparent",
        "color": colors.text.info.default,
        "&:hover": {
          backgroundColor: "transparent",
          color: colors.text.info.default,
          textDecoration: "underline",
        },
        "&.Mui-disabled": disabledTextStyle,
      },
    },
  ],
};
