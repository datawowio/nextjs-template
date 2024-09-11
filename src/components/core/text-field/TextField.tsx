import MUITextField from "@mui/material/TextField";
import type { TextFieldProps } from "./types";

export default function TextField(props: TextFieldProps) {
  return <MUITextField {...props} />;
}
