import type { BreadcrumbsProps as MUIBreadcrumbsProps } from "@mui/material/Breadcrumbs";
import type { BaseComponent } from "@/types/components";

export interface BreadcrumbsList {
  name: string;
  href?: string;
}

export interface BreadcrumbsProps extends BaseComponent, MUIBreadcrumbsProps {
  breadcrumbs: Array<BreadcrumbsList>;
}
