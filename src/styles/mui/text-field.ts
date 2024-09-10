import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";

export const MuiTextField = {
  styleOverrides: {
    root: {
      "& .MuiOutlinedInput": {
        lineHeight: "1.5rem",
      },
      "& .MuiOutlinedInput-input": {
        padding: "0.75rem 0.875rem",
        height: "1.5rem",
        ...customVariantStyle["regularParagraphLG"],
      },
      "& .Mui-disabled": {
        backgroundColor: colors.surface.placeholder.disabled,
        borderColor: colors.border.placeholder.disabled,
        color: colors.text.placeholder.disabled,
      },
    },
  },
};
