import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";

export const MuiPopper = {
  styleOverrides: {
    root: {
      "& .MuiAutocomplete-paper": {
        li: {
          ...customVariantStyle["regularParagraphLG"],
          color: colors.text.primary.message,
        },
      },
    },
  },
};
