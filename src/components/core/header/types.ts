import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";

export interface HeaderProps {
  children?: ReactNode;
  sx?: SxProps;
  text?: string;
}
