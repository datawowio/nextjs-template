import { colors } from "@/config/palette";
import type { SxProps, Theme } from "@mui/material";

export const card: SxProps<Theme> = {
  background: colors.base.white,
  borderRadius: "8px 8px 0 0",
};

export const flexWrapper: SxProps<Theme> = {
  display: "flex",
  gap: 2,
  alignItems: "center",
};
