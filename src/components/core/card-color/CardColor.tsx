import { hexToRgb } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "@/components/core/typography";

import { styles } from "./styles";

import type { CardColorProps } from "./types";

export default function CardColor({
  colorName,
  hexCode,

  colorStyles,
}: CardColorProps) {
  return (
    <Stack sx={styles.root}>
      <Box
        role="presentation"
        sx={{ ...colorStyles, ...styles.colorPreview }}
      />
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
