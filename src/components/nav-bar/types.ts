import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { BaseComponent } from "@/types/components";

export interface NavBarProps extends BaseComponent {
  logo: ReactNode;
  handleDrawerToggle: () => Dispatch<SetStateAction<boolean>> | void;
  profile?: ReactNode;
}
