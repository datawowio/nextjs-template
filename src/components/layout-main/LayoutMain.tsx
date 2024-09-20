import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import { Box, DrawerHeader, Main } from "./styles";

import type { LayoutMainProps } from "./types";

export default function LayoutMain({
  children,
  dataTestId = "layout-main",
  drawerWidth,
  handleDrawerToggle,
  navBarProps,
  open,
  sideBarProps,
}: LayoutMainProps) {
  return (
    <Box data-test-id={dataTestId}>
      <CssBaseline />
      <NavBar {...navBarProps} handleDrawerToggle={handleDrawerToggle} />
      <SideBar {...sideBarProps} drawerWidth={drawerWidth} open={open} />
      <Main drawerWidth={drawerWidth} open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
