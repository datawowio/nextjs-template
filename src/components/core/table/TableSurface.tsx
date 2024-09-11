import Paper from "@mui/material/Paper";
import type { TableSurfaceProps } from "./types";

export default function TableSurface(props: TableSurfaceProps) {
  return <Paper {...props} variant="outlined" />;
}
