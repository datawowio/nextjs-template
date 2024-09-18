import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

import type { Components } from "@mui/material";

// NOTE: Edit these styles will effects these components:
// - core/input
// - input-password

export const MuiOutlinedInput: Components["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
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
      ".MuiOutlinedInput-input": {
        padding: `${rem(12)} ${rem(14)}`,
        ...customVariantStyle["regularParagraphLG"],
        minHeight: rem(24),
        height: "auto",
      },
      "&.Mui-disabled": {
        backgroundColor: colors.surface.placeholder.disabled,
        borderColor: colors.border.placeholder.disabled,
        color: colors.text.placeholder.disabled,
      },
      ".MuiOutlinedInput-root": {
        color: colors.text.primary.message,
      },
    },
  },
};
