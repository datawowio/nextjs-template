import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "@/components/core/typography";
import rem from "@/utils/rem";
import { customStatusStyle, statusIconStyle } from "./styles";

import type { LabelStatusProps } from "./types";

export default function LabelStatus({
  status = "ready",
  text,
}: LabelStatusProps) {
  return (
    <Stack alignItems="center" direction="row" gap={rem(4)}>
      <Box
        sx={{
          backgroundColor: customStatusStyle[status].color,
          ...statusIconStyle,
        }}
      />
      <Typography
        component="span"
        customVariant="mediumParagraphSM"
        sx={{ textTransform: "uppercase", ...customStatusStyle[status] }}
      >
        {text || status}
      </Typography>
    </Stack>
  );
}
