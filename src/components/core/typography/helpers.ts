import type { TypographyProps as MUITypographyProps } from "@mui/material/Typography";
import { customVariantStyle } from "./styles";

import type { CustomVariant } from "./types";

export function getCustomVariantProps(
  customVariant?: CustomVariant,
): Pick<MUITypographyProps, "component" | "sx"> {
  switch (customVariant) {
    case "regularDisplayLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularDisplayMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularHeadingLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularHeadingMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularHeadingSM":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularSubHeading":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularParagraphLG":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularParagraphMD":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularParagraphSM":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularCaptionLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularCaptionMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularLinkMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "regularLinkSM":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumDisplayLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumDisplayMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumHeadingLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumHeadingMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumHeadingSM":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumSubHeading":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumParagraphLG":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumParagraphMD":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumParagraphSM":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumCaptionLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumCaptionMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumLinkMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "mediumLinkSM":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldDisplayLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldDisplayMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldHeadingLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldHeadingMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldHeadingSM":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldSubHeading":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldParagraphLG":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldParagraphMD":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldParagraphSM":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldCaptionLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldCaptionMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldLinkMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "semiboldLinkSM":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldDisplayLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldDisplayMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldHeadingLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldHeadingMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldHeadingSM":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldSubHeading":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldParagraphLG":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldParagraphMD":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldParagraphSM":
      return {
        component: "p",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldCaptionLG":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldCaptionMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldLinkMD":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    case "boldLinkSM":
      return {
        component: "span",
        sx: { ...customVariantStyle[customVariant] },
      };
    default:
      throw new Error("unknown custom variant type");
  }
}
