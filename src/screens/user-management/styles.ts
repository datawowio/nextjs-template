import { colors } from "@/config/palette";
import rem from "@/utils/rem";
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

export const imageWrapper: SxProps<Theme> = {
  position: "relative",
  mx: "auto",
  width: 400,
  height: 160,
};

export const root: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  px: `0 ${rem(20)}`,
  height: "100vh",
  width: "100%",
};
