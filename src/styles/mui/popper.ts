import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";

// NOTE: Edit these styles will effects these components:
// - core/select
// - core/select-multiple

export const MuiPopper = {
  styleOverrides: {
    root: {
      ".MuiPaper-root": {
        ".MuiAutocomplete-listbox": {
          "minHeight": "160px",
          ".MuiAutocomplete-option": {
            ...customVariantStyle["regularParagraphLG"],
            "color": colors.text.primary.message,
            "&.Mui-focused": {
              backgroundColor: colors.surface.default.disabled,
            },
            '&[aria-disabled="true"]': {
              opacity: 1,
              backgroundColor: colors.surface.placeholder.disabled,
              color: colors.text.placeholder.disabled,
            },
            '&[aria-selected="true"]': {
              opacity: 1,
              backgroundColor: colors.surface.info.subdued,
            },
          },
          ".MuiCheckbox-root": {
            padding: 0,
          },
        },
      },
    },
  },
};
