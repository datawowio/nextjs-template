import type { TypographyProps as MUITypographyProps } from "@mui/material/Typography";
import { customVariantStyle } from "./styles";
import { CustomVariant } from "./types";

export function getCustomVariantProps(
  customVariant?: CustomVariant,
): Pick<MUITypographyProps, "component" | "sx"> {
  switch (customVariant) {
    case "h4":
      return { component: "h4", sx: { ...customVariantStyle[customVariant] } };
    case "regularHeadingSM":
      return { component: "h4", sx: { ...customVariantStyle[customVariant] } };
    case "regularSubHeading":
      return { component: "h4", sx: { ...customVariantStyle[customVariant] } };
    default:
      throw new Error("unknown custom variant type");
  }
}
