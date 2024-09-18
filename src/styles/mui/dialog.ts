import rem from "@/utils/rem";

import type { Components } from "@mui/material";

export const MuiDialog: Components["MuiDialog"] = {
  styleOverrides: {
    root: {
      ".MuiPaper-root": {
        borderRadius: "16px",
        padding: rem(32),
        boxSizing: "border-box",
      },
      ".MuiDialogTitle-root": {
        padding: 0,
      },
      ".MuiDialogContent-root": {
        padding: 0,
      },
      "&.dialog-confirmation": {
        ".MuiPaper-root": {
          minWidth: 600,
          gap: rem(16),
        },
        ".MuiDialogActions-root": {
          marginTop: rem(32),
        },
      },
      ".MuiDialogActions-root": {
        padding: 0,
      },
    },
  },
};
