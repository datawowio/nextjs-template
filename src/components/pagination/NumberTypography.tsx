import Typography from "@/components/typography";
import { colors } from "@/config/palette";
import type { ReactNode } from "react";

export default function NumberTypography({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Typography
      component="span"
      sx={{ color: colors.text.primary.header, mx: "8px" }}
      customVariant="mediumParagraphLG"
    >
      {children}
    </Typography>
  );
}
