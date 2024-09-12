import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

import type { Components } from "@mui/material";

export const MuiAlert: Components["MuiAlert"] = {
  styleOverrides: {
    root: {
      ...customVariantStyle["regularParagraphMD"],
      "&.toast": {
        padding: `${rem(10)} ${rem(16)}`,
        color: colors.text.primary.message,
      },
      ".MuiAlert-message": {
        padding: 0,
        paddingTop: rem(3),
      },
      ".MuiAlert-icon": {
        padding: 0,
        fontSize: "var(--font-size-4)",
        marginRight: rem(4),
      },
      ".MuiAlert-action": {
        "paddingTop": 0,
        "marginRight": 0,
        "marginTop": rem(2),
        ".MuiIconButton-root": {
          padding: 0,
        },
      },
    },
  },
  variants: [
    {
      props: {
        severity: "success",
      },
      style: {
        "backgroundColor": colors.surface.success.subdued,
        ".MuiAlert-icon": {
          color: colors.icon.success.default,
        },
        ".MuiAlert-action": {
          ".MuiIconButton-root": {
            color: colors.icon.default.gray,
          },
        },
      },
    },
    {
      props: {
        severity: "error",
      },
      style: {
        "backgroundColor": colors.surface.error.subdued,
        ".MuiAlert-icon": {
          color: colors.icon.delete.default,
        },
        ".MuiAlert-action": {
          ".MuiIconButton-root": {
            color: colors.icon.default.gray,
          },
        },
      },
    },
  ],
};
