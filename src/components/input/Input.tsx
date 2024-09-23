import MUITextField from "@mui/material/TextField";
import type { InputProps } from "./types";

export default function Input({ dataTestId = "input", ...props }: InputProps) {
  return (
    <MUITextField {...props} data-testid={dataTestId} variant="outlined" />
  );
}
