import type { FormControlLabelProps } from "@mui/material";
import type { CheckboxProps as MUICheckboxProps } from "@mui/material/Checkbox";

export type CheckboxCustomSize = "small" | "medium" | "large";

export interface CheckboxProps extends MUICheckboxProps {
  labelProps: FormControlLabelProps;
  label?: string;
  disableTypography?: boolean;
}
