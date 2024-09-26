import { customVariantStyle } from "@/components/typography/styles";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

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
      "width": "100%",
      "&:hover": {
        boxShadow: "none",
      },
      "&.Mui-focusVisible": {
        boxShadow: "none",
      },
    },
  },
  variants: [
    {
      props: {
        size: "small",
      },
      style: {
        ...customVariantStyle["semiboldParagraphMD"],
        height: rem(40),
      },
    },
    {
      props: {
        size: "medium",
      },
      style: {
        ...customVariantStyle["semiboldParagraphLG"],
        height: rem(44),
      },
    },
    {
      props: {
        size: "large",
      },
      style: {
        ...customVariantStyle["boldHeadingSM"],
        height: rem(56),
      },
    },
    {
      props: {
        color: "error",
        variant: "contained",
      },
      style: {
        "backgroundColor": colors.surface.error.default,
        "borderColor": colors.surface.error.default,
        "color": colors.base.white,
        "&:hover": {
          backgroundColor: colors.surface.error.hover,
          borderColor: colors.surface.error.hover,
        },
        "&.Mui-disabled": disabledContainedStyle,
        "&.Mui-focusVisible": {
          backgroundColor: colors.surface.error.hover,
          borderColor: colors.border.error.default,
        },
      },
    },
    {
      props: {
        color: "success",
        variant: "contained",
      },
      style: {
        "backgroundColor": colors.surface.primary.green,
        "borderColor": colors.surface.primary.green,
        "color": colors.base.white,
        "&:hover": {
          backgroundColor: colors.surface.primary.greenDarker,
          borderColor: colors.surface.primary.greenDarker,
        },
        "&.Mui-disabled": disabledContainedStyle,
        "&.Mui-focusVisible": {
          backgroundColor: colors.surface.primary.greenDarker,
          borderColor: colors.border.primary.green,
        },
      },
    },
    {
      props: {
        color: "primary",
        variant: "contained",
      },
      style: {
        "backgroundColor": colors.surface.info.default,
        "&:hover": {
          backgroundColor: colors.surface.info.hover,
          borderColor: colors.surface.info.hover,
        },
        "&.Mui-disabled": disabledContainedStyle,
        "&.Mui-focusVisible": {
          backgroundColor: colors.surface.info.hover,
          borderColor: colors.border.info.hover,
        },
      },
    },
    {
      props: {
        color: "primary",
        variant: "outlined",
      },
      style: {
        "borderColor": colors.border.info.default,
        "color": colors.text.info.default,
        "&:hover": {
          backgroundColor: colors.surface.info.subdued,
          borderColor: colors.border.info.default,
        },
        "&.Mui-disabled": disabledContainedStyle,
        "&.Mui-focusVisible": {
          borderColor: colors.surface.info.hover,
          color: colors.surface.info.hover,
        },
      },
    },
    {
      props: {
        variant: "text",
      },
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
