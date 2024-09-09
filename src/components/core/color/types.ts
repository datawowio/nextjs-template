import type { PaperProps } from "@mui/material/Paper";

export interface ColorSurfaceProps extends Omit<PaperProps, "variant"> {}

export interface Tone {
  cssVar: string;
  hex: string;
  key: string;
  rgb: string;
}

export interface ColorProps {
  title: string;
  tones: Tone[];
}
