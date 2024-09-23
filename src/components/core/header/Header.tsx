import Stack from "@mui/material/Stack";
import Typography from "@/components/core/typography";
import { colors } from "@/config/palette";

import type { HeaderProps } from "./types";

export default function Header({ children, sx, text }: HeaderProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={sx}
    >
      <Typography
        customVariant="boldDisplayMD"
        sx={{ color: colors.text.primary.header }}
      >
        {text}
      </Typography>
      {children}
    </Stack>
  );
}
