import rem from "@/utils/rem";

import type { Components } from "@mui/material";

export const MuiCard: Components["MuiCard"] = {
  styleOverrides: {
    root: {
      "boxSizing": "border-box",

      "&.modal": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        minWidth: "600px",
        padding: rem(32),
        borderRadius: rem(16),
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
