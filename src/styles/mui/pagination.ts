import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";
import type { Components } from "@mui/material";

export const MuiPagination: Components["MuiPagination"] = {
  styleOverrides: {
    root: {
      ".MuiPaginationItem-text": {
        color: colors.text.primary.message,
        ...customVariantStyle["regularParagraphLG"],
        paddingTop: rem(1),
      },
      ".MuiPaginationItem-page": {
        "&:hover": {
          backgroundColor: colors.bg.lightGray,
        },
        "&.Mui-selected": {
          "backgroundColor": colors.surface.info.default,
          "color": colors.base.white,
          "&:hover": {
            backgroundColor: colors.surface.info.default,
            color: colors.base.white,
          },
        },
      },
      ".MuiPaginationItem-previousNext": {
        "color": colors.icon.default.base,
        "&:hover": {
          backgroundColor: colors.bg.lightGray,
        },
        "&.Mui-disabled": {
          color: colors.icon.disabled.base,
          opacity: 1,
        },
      },
    },
  },
};
