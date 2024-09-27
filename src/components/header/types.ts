import type { SxProps } from "@mui/material";
import type { StackProps } from "@mui/material";
import type { ReactNode } from "react";
import type { BreadcrumbsList } from "@/components/breadcrumbs";
import type { BaseComponent } from "@/types/components";

export interface HeaderProps extends StackProps, BaseComponent {
  breadcrumbs?: Array<BreadcrumbsList>;
  children?: ReactNode;
  hrefBack?: string;
  sx?: SxProps;
  text?: string;
}
