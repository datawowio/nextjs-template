import type { FormControlProps } from "@mui/material";
import type { BaseComponent } from "@/types/components";

export interface InputPasswordProps extends BaseComponent, FormControlProps {
  label?: string;
}
