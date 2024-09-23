import { customVariantStyle } from "@/components/typography/styles";
import rem from "@/utils/rem";
import type { Components } from "@mui/material";

export const MuiFormControlLabel: Components["MuiFormControlLabel"] = {
  styleOverrides: {
    root: {
      "alignItems": "center",
      "marginLeft": 0,
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
