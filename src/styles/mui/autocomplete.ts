import { customVariantStyle } from "@/components/typography/styles";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

// NOTE: Edit these styles will effects these components:
// - core/select
// - core/select-multiple

export const MuiAutocomplete = {
  styleOverrides: {
    root: {
      ".MuiTextField-root": {
        ".MuiOutlinedInput-input": {
          padding: `${rem(12)} ${rem(14)} ${rem(12)} ${rem(4)}`,
          height: rem(24),
          ...customVariantStyle["regularParagraphLG"],
        },
      },
      ".MuiOutlinedInput-root": {
        "padding": `0 ${rem(40)} 0 ${rem(8)}`,
        "input": {
          paddingLeft: rem(6),
        },
        ".MuiButtonBase-root": {
          "&.MuiAutocomplete-tag": {
            "backgroundColor": colors.surface.default.disabledDarker,
            ...customVariantStyle["regularParagraphMD"],
            ".MuiChip-label": {
              ...customVariantStyle["regularParagraphMD"],
              color: colors.text.primary.message,
            },
            ".MuiChip-deleteIcon": {
              color: colors.text.primary.message,
              fontSize: rem(16),
              margin: `${rem(-3)} ${rem(8)} 0 ${rem(-6)}`,
            },
          },
          "&.MuiAutocomplete-popupIndicator": {
            color: colors.icon.placeholder.default,
          },
          "&.MuiAutocomplete-clearIndicator": {
            color: colors.icon.placeholder.default,
          },
          "&.Mui-disabled": {
            "&.MuiChip-root": {
              opacity: 1,
            },
            ".MuiChip-label": {
              color: colors.text.primary.subHeader2,
            },
            ".MuiChip-deleteIcon": {
              color: colors.text.primary.subHeader2,
            },
          },
        },
      },
      ".MuiFormLabel-root": {
        "&.MuiInputLabel-shrink": {
          color: colors.text.placeholder.default,
        },
      },
    },
  },
};
