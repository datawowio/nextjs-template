import { CustomVariant } from "@/components/core/typography/types";
import type { CheckboxCustomSize } from "./types";

export const customTypographyStyle = {
  small: "mediumParagraphMD",
  medium: "mediumParagraphLG",
  large: "mediumParagraphLG",
};

export function getCustomTextVariant(size: CheckboxCustomSize) {
  switch (size) {
    case "small":
    case "medium":
    case "large":
      return customTypographyStyle[size] as CustomVariant;
    default:
      throw new Error(`unknown custom text variant size: ${size}`);
  }
}
