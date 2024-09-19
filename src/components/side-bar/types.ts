import type { ReactNode } from "react";

export interface SidbarProps {
  children: ReactNode;
  open: boolean;
  drawerWidth?: number;
}
