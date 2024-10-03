import type { FormControlLabelProps } from "@mui/material/FormControlLabel";
import type { CheckboxProps } from "@mui/material/Checkbox";
import type { BaseComponentProps } from "@/types/component";

type CustomFormControlLabelProps = Omit<FormControlLabelProps, "control">;

export interface InputCheckboxProps extends BaseComponentProps {
  formControlLabelProps?: CustomFormControlLabelProps;
  checkboxProps?: CheckboxProps;
}
