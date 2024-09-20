import type { ReactNode } from "react";

export interface SideBarProps {
  children: ReactNode;
  open: boolean;
  dataTestId?: string;
  drawerWidth?: number;
}
