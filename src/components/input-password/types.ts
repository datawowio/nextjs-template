import type { FormControlProps } from "@mui/material/FormControl";
import type { OutlinedInputProps } from "@mui/material/OutlinedInput";
import type { BaseComponentProps } from "@/types/component";

type CustomFormControlProps = Omit<FormControlProps, "fullWidth" | "variant">;
type CustomOutlinedInputProps = Omit<
  OutlinedInputProps,
  "aria-describedby" | "endAdornment" | "type"
>;

export interface InputPasswordProps extends BaseComponentProps {
  errorMessage?: string;
  formControlProps?: CustomFormControlProps;
  outlinedInputProps?: CustomOutlinedInputProps;
}
