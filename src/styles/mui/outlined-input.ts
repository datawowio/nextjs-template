import { colors } from "@/config/palette";

export const MuiOutlinedInput = {
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
    },
  },
};
