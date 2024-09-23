import MUITypography from "@mui/material/Typography";

import { getCustomVariantProps } from "./helpers";
import type { TypographyProps } from "./types";

export default function Typography({
  component,
  dataTestId = "text",
  sx,
  customVariant = "regularParagraphLG",
  ...props
}: TypographyProps) {
  const customVariantProps = getCustomVariantProps(customVariant);
  const customSX = { ...customVariantProps?.sx, ...sx };
  const customComponent = component
    ? component
    : customVariantProps.component
      ? customVariantProps.component
      : "span";

  return (
    <MUITypography
      {...props}
      component={customComponent}
      data-testid={dataTestId}
      sx={customSX}
      variant="body1"
    />
  );
}
