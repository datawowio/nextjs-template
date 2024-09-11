import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

import type { Components } from "@mui/material";

export const MuiTextField: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput-input": {
        padding: "0.75rem 0.875rem",
        height: rem(24),
        ...customVariantStyle["regularParagraphLG"],
      },
      "& .Mui-disabled": {
        backgroundColor: colors.surface.placeholder.disabled,
        borderColor: colors.border.placeholder.disabled,
        color: colors.text.placeholder.disabled,
      },
      ".MuiOutlinedInput-root": {
        "lineHeight": "1.5rem",
        "color": colors.text.primary.message,
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: colors.border.default.base,
        },
        "&:hover": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.border.default.hover,
          },
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: colors.border.info.default,
        },
        "&.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: colors.border.error.default,
        },
      },
      ".MuiFormLabel-root": {
        "height": rem(24),
        "marginTop": "-0.25rem",
        ...customVariantStyle["regularParagraphLG"],
        "&.MuiInputLabel-shrink": {
          "color": colors.text.info.default,
          "marginTop": 0,
          "&.Mui-error": {
            color: colors.text.placeholder.error,
          },
          "&.MuiFormLabel-filled": {
            "color": colors.text.placeholder.default,
            "&.Mui-focused": {
              color: colors.text.info.default,
            },
            "&.Mui-error": {
              color: colors.text.placeholder.error,
            },
          },
        },
        "&.Mui-disabled": {
          background: "transparent",
          color: colors.text.placeholder.disabled,
        },
        "&.Mui-error": {
          color: colors.text.placeholder.default,
        },
        "& .MuiFormLabel-asterisk": {
          color: colors.icon.delete.default,
        },
      },
    },
  },
};
