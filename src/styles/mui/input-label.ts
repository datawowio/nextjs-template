import { customVariantStyle } from "@/components/typography/styles";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

import type { Components } from "@mui/material";

// NOTE: Edit these styles will effects these components:
// - core/input
// - input-password

export const MuiInputLabel: Components["MuiInputLabel"] = {
  styleOverrides: {
    root: {
      "marginTop": rem(-2),
      ...customVariantStyle["regularParagraphLG"],
      "&.MuiInputLabel-shrink": {
        "marginTop": 0,
        "&.Mui-focused": {
          color: colors.text.info.default,
        },
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
};
