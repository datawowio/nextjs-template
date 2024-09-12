import Paper from "@mui/material/Paper";
import type { TableDataSurfaceProps } from "./types";

export default function TableDataSurface(props: TableDataSurfaceProps) {
  return <Paper {...props} variant="outlined" />;
}
