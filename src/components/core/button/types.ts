import type { ButtonProps as MUIButtonProps } from "@mui/material/Button";

export interface ButtonProps extends MUIButtonProps {
  dataTestId?: string;
}
