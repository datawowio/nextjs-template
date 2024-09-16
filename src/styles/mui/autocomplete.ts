import { customVariantStyle } from "@/components/core/typography/styles";
import { colors } from "@/config/palette";
import { MuiTextField } from "./text-field";

export const MuiAutocomplete = {
  styleOverrides: {
    root: {
      ".MuiTextField-root": {
        ...MuiTextField.styleOverrides.root,
        ".MuiOutlinedInput-input": {
          padding: "0.75rem 0.875rem 0.75rem 0.25rem",
          height: "1.5rem",
          ...customVariantStyle["regularParagraphLG"],
        },
      },
      ".MuiOutlinedInput-root": {
        "padding": "0 2.5rem 0 0.5rem",
        "input": {
          paddingLeft: "0.375rem",
        },
        ".MuiButtonBase-root": {
          "height": "32px",
          "&.MuiAutocomplete-tag": {
            "backgroundColor": colors.surface.default.disabledDarker,
            ...customVariantStyle["regularParagraphMD"],
            ".MuiChip-label": {
              ...customVariantStyle["regularParagraphMD"],
              color: colors.text.primary.message,
            },
            ".MuiChip-deleteIcon": {
              color: colors.text.primary.message,
              fontSize: "1rem",
              margin: "-3px 5px 0 -6px",
            },
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
