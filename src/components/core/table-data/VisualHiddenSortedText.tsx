import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

import type { VisualHiddenSortedTextProps } from "./types";

export default function VisualHiddenSortedText({
  isShow,
  text,
}: VisualHiddenSortedTextProps) {
  if (!isShow) {
    return null;
  }

  return (
    <Box component="span" sx={visuallyHidden}>
      {text}
    </Box>
  );
}
