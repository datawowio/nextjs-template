import type { TextFieldProps as MUITextFieldProps } from "@mui/material/TextField";

export type InputProps = Omit<MUITextFieldProps, "variant">;
