import type { TypographyProps as MUITypographyProps } from "@mui/material/Typography";
import type { CSSProperties } from "react";

export type CustomVariant =
  | "regularDisplayLG"
  | "regularDisplayMD"
  | "regularHeadingLG"
  | "regularHeadingMD"
  | "regularHeadingSM"
  | "regularSubHeading"
  | "regularParagraphLG"
  | "regularParagraphMD"
  | "regularParagraphSM"
  | "regularCaptionLG"
  | "regularCaptionMD"
  | "regularLinkMD"
  | "regularLinkSM"
  | "mediumDisplayLG"
  | "mediumDisplayMD"
  | "mediumHeadingLG"
  | "mediumHeadingMD"
  | "mediumHeadingSM"
  | "mediumSubHeading"
  | "mediumParagraphLG"
  | "mediumParagraphMD"
  | "mediumParagraphSM"
  | "mediumCaptionLG"
  | "mediumCaptionMD"
  | "mediumLinkMD"
  | "mediumLinkSM"
  | "semiboldDisplayLG"
  | "semiboldDisplayMD"
  | "semiboldHeadingLG"
  | "semiboldHeadingMD"
  | "semiboldHeadingSM"
  | "semiboldSubHeading"
  | "semiboldParagraphLG"
  | "semiboldParagraphMD"
  | "semiboldParagraphSM"
  | "semiboldCaptionLG"
  | "semiboldCaptionMD"
  | "semiboldLinkMD"
  | "semiboldLinkSM"
  | "boldDisplayLG"
  | "boldDisplayMD"
  | "boldHeadingLG"
  | "boldHeadingMD"
  | "boldHeadingSM"
  | "boldSubHeading"
  | "boldParagraphLG"
  | "boldParagraphMD"
  | "boldParagraphSM"
  | "boldCaptionLG"
  | "boldCaptionMD"
  | "boldLinkMD"
  | "boldLinkSM";

export type CustomVariantStyle = {
  [key in CustomVariant]: CSSProperties;
};

export interface TypographyProps
  extends Omit<MUITypographyProps, "variant" | "variantMapping"> {
  customVariant?: CustomVariant;
}
