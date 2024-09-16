import Paper from "@mui/material/Paper";
import type { PaperProps } from "@mui/material/Paper";

export default function TableDataSurface({
  elevation = 0,
  ...props
}: PaperProps) {
  return <Paper {...props} elevation={elevation} />;
}
