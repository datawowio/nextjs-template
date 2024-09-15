import { colors } from "@/config/palette";
import type { Components } from "@mui/material";

export const MuiFormControlLabel: Components["MuiFormControlLabel"] = {
  styleOverrides: {
    root: {
      ".MuiTypography-root": {
        "&.Mui-disabled": {
          color: colors.text.placeholder.disabled,
        },
      },
    },
  },
};
