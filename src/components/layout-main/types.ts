import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { NavBarProps } from "@/components/nav-bar";
import type { SideBarProps } from "@/components/side-bar";
import type { BaseComponent } from "@/types/components";

export interface LayoutMainProps extends BaseComponent {
  children: ReactNode;
  drawerWidth: number;
  handleDrawerToggle: () => Dispatch<SetStateAction<boolean>> | void;
  navBarProps: Omit<NavBarProps, "handleDrawerToggle">;
  open: boolean;
  sideBarProps: Omit<SideBarProps, "open">;
}
