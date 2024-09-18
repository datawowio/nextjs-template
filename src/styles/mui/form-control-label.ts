import { customVariantStyle } from "@/components/core/typography/styles";
import rem from "@/utils/rem";
import type { Components } from "@mui/material";

export const MuiFormControlLabel: Components["MuiFormControlLabel"] = {
  styleOverrides: {
    root: {
      "alignItems": "center",
      "marginRight": 0,

      "&.small": {
        "gap": rem(8),
        ".MuiFormControlLabel-label": {
          ...customVariantStyle["mediumParagraphMD"],
        },
      },

      "&.medium": {
        "gap": rem(12),
        ".MuiFormControlLabel-label": {
          ...customVariantStyle["mediumParagraphLG"],
        },
      },

      "&.large": {
        "gap": rem(12),
        ".MuiFormControlLabel-label": {
          ...customVariantStyle["mediumParagraphLG"],
        },
      },
    },
  },
};
