import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";

export const MuiFormLabel = {
  styleOverrides: {
    root: {
      "height": "1.5rem",
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
          "&.Mui-error": {
            color: colors.text.placeholder.error,
          },
          "&.Mui-focused": {
            color: colors.text.info.default,
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
};
