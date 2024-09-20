import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { NavBarProps } from "@/components/nav-bar";
import type { SideBarProps } from "@/components/side-bar";

export interface LayoutMainProps {
  children: ReactNode;
  drawerWidth: number;
  handleDrawerToggle: () => Dispatch<SetStateAction<boolean>> | void;
  navBarProps: Omit<NavBarProps, "handleDrawerToggle">;
  open: boolean;
  sideBarProps: Omit<SideBarProps, "open">;
}
