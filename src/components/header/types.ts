import type { SxProps } from "@mui/material";
import type { ReactNode } from "react";
import type { BreadcrumbsList } from "@/components/breadcrumbs";

export interface HeaderProps {
  breadcrumbs?: Array<BreadcrumbsList>;
  children?: ReactNode;
  hrefBack?: string;
  sx?: SxProps;
  text?: string;
}
