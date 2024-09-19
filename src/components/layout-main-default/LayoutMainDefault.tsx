import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import { DrawerHeader, Main } from "./styles";

import type { LayoutMainDefaultProps } from "./types";

export default function LayoutMainDefault({
  children,
  drawerWidth,
  handleDrawerToggle,
  navBarProps,
  open,
  sideBarProps,
}: LayoutMainDefaultProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar {...navBarProps} handleDrawerToggle={handleDrawerToggle}></NavBar>
      <SideBar {...sideBarProps} open={open}></SideBar>
      <Main open={open} drawerWidth={drawerWidth}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
