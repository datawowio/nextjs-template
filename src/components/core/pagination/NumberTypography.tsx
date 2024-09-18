import Typography from "@/components/core/typography";
import { colors } from "@/config/palette";

export default function NumberTypography({
  children,
}: {
  children: React.ReactNode;
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
