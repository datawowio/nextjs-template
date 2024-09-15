import { CustomVariant } from "@/components/core/typography/types";
import { customTypographyStyle } from "./styles";
import { CheckboxCustomSize } from "./types";

export function getCustomTextVariant(size: CheckboxCustomSize) {
  return customTypographyStyle[size] as CustomVariant;
}
