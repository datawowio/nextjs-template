import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface NavbarProps {
  logo: ReactNode;
  handleDrawerToggle: () => Dispatch<SetStateAction<boolean>>;
  profile?: ReactNode;
}
