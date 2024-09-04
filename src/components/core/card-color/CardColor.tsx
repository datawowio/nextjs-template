import { Box, hexToRgb, Stack } from "@mui/material";
import Typography from "@/components/core/typography";

import type { CardColorProps } from "./types";

export default function CardColor({ sx, hexCode, colorName }: CardColorProps) {
  return (
    <Stack
      sx={{
        width: "fit-content",
        border: "1px solid",
        borderColor: "otherPrimaryGray",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ ...sx, borderRadius: "10px 10px 0 0" }} />
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
