import Paper from "@mui/material/Paper";
import type { ColorSurfaceProps } from "./types";

export default function ColorSurface(props: ColorSurfaceProps) {
  return <Paper {...props} variant="outlined" />;
}
