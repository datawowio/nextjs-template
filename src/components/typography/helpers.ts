import { customVariantStyle } from "./styles";

import type { TypographyProps as MUITypographyProps } from "@mui/material/Typography";
import type { CustomVariant } from "./types";

export function getCustomVariantProps(
  customVariant: CustomVariant,
): Pick<MUITypographyProps, "component" | "sx"> {
  if (!customVariantStyle[customVariant]) {
    throw new Error("unknown custom variant type");
  }

  let component: MUITypographyProps["component"] = "span";
  const paragraphVariants: CustomVariant[] = [
    "regularParagraphLG",
    "regularParagraphMD",
    "regularParagraphSM",
    "mediumParagraphLG",
    "mediumParagraphMD",
    "mediumParagraphSM",
    "semiboldParagraphLG",
    "semiboldParagraphMD",
    "semiboldParagraphSM",
    "boldParagraphLG",
    "boldParagraphMD",
    "boldParagraphSM",
  ];

  if (customVariant && paragraphVariants.includes(customVariant)) {
    component = "p";
  }

  return {
    component,
    sx: { ...customVariantStyle[customVariant] },
  };
}
