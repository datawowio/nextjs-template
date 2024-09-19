import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface NavBarProps {
  logo: ReactNode;
  handleDrawerToggle: () => Dispatch<SetStateAction<boolean>> | void;
  profile?: ReactNode;
}
