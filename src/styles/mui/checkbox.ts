import rem from "@/utils/rem";
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
  variants: [
    {
      props: { size: "small" },
      style: {
        marginRight: rem(8),
      },
    },
    {
      props: { size: "medium" },
      style: {
        marginRight: rem(12),
      },
    },
    {
      props: { size: "large" },
      style: {
        marginRight: rem(12),
      },
    },
  ],
};
