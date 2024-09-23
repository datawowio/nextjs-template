import type { CheckboxProps as MUICheckboxProps } from "@mui/material/Checkbox";
import type { BaseComponent } from "@/types/components";

export type CheckboxCustomSize = "small" | "medium" | "large";

export interface CheckboxProps extends BaseComponent, MUICheckboxProps {
  disableTypography?: boolean;
  label?: string;
}
