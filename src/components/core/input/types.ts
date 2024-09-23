import type { TextFieldProps as MUITextFieldProps } from "@mui/material/TextField";
import type { BaseComponent } from "@/types/components";

export type InputProps = BaseComponent &
  Omit<MUITextFieldProps, "variant"> & {};
