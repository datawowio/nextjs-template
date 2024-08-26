import type { SxProps, Theme } from "@mui/material";

export const root: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  px: "0 20px",
  height: "100vh",
  backgroundColor: "#f4f4f4",
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
