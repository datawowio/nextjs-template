import type { CheckboxProps as MUICheckboxProps } from "@mui/material/Checkbox";

export type CheckboxCustomSize = "small" | "medium" | "large";

export interface CheckboxProps extends MUICheckboxProps {
  disableTypography?: boolean;
  label?: string;
}
