import type { ReactNode } from "react";
import type { BaseComponent } from "@/types/components";

export interface SideBarProps extends BaseComponent {
  children: ReactNode;
  open: boolean;
  drawerWidth?: number;
}
