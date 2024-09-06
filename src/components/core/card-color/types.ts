import type { SxProps } from "@mui/material";

export interface CardColorProps {
  colorName: string;
  hexCode: string;

  sx?: {
    backgroundColor?: string;
    height?: number | string;
    minWidth?: number | string;
    width?: number | string;
  };
}
