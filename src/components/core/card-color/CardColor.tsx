import { Box, hexToRgb, Stack } from "@mui/material";
import Typography from "@/components/core/typography";
import { styles } from "./styles";

import type { CardColorProps } from "./types";

export default function CardColor({
  colorStyles,
  hexCode,
  colorName,
}: CardColorProps) {
  return (
    <Stack sx={styles.container}>
      <Box sx={{ ...colorStyles, borderRadius: "10px 10px 0 0" }} />
      <Stack p={1} gap={1}>
        <Typography customVariant="mediumCaptionMD">{colorName}</Typography>
        <Typography customVariant="regularCaptionMD">{hexCode}</Typography>
        <Typography customVariant="regularCaptionMD">
          {hexToRgb(hexCode)}
        </Typography>
      </Stack>
    </Stack>
  );
}
