import rem from "@/utils/rem";
import type { SxProps, Theme } from "@mui/material";
import type { CSSProperties } from "react";

const link: CSSProperties = {
  textDecoration: "none",
};

const separateIcon: SxProps<Theme> = {
  marginTop: rem(-2),
};

export const styles = {
  link,
  separateIcon,
};
