import MUITextField from "@mui/material/TextField";
import type { InputProps } from "./types";

export default function Input(props: InputProps) {
  return <MUITextField {...props} variant="outlined" />;
}
