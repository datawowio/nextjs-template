import Paper from "@mui/material/Paper";
import type { PaperProps } from "@mui/material/Paper";

export default function TableDataSurface({
  variant = "outlined",
  ...props
}: PaperProps) {
  return <Paper {...props} variant={variant} />;
}
