import rem from "@/utils/rem";
import type { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  px: `0 ${rem(20)}`,
  height: "100vh",
  width: "100%",
};

export const card: SxProps<Theme> = {
  p: 4,
  textAlign: "center",
};

export const imageWrapper: SxProps<Theme> = {
  position: "relative",
  mx: "auto",
  width: 400,
  height: 160,
};
