import rem from "@/utils/rem";

import type { Components } from "@mui/material";

export const MuiCard: Components["MuiCard"] = {
  styleOverrides: {
    root: {
      "boxSizing": "border-box",
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "padding": rem(32),
      "borderRadius": rem(16),

      "&.modal": {
        minWidth: rem(600),
      },

      ".MuiCardContent-root": {
        padding: 0,
        marginBottom: rem(32),
      },

      ".MuiCardActions-root": {
        padding: 0,
      },
    },
  },
};
