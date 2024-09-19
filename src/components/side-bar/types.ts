import type { ReactNode } from "react";

export interface SideBarProps {
  children: ReactNode;
  open: boolean;
  drawerWidth?: number;
}
