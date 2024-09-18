import type { Components } from "@mui/material";

export const MuiCheckbox: Components["MuiCheckbox"] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      "boxShadow": "none",
      "padding": 0,
      "&:hover": {
        boxShadow: "none",
      },
    },
  },
};
