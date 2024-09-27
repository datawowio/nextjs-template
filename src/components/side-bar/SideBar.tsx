import Box from "@mui/material/Box";
import { Drawer, Toolbar } from "./styles";

import type { SideBarProps } from "./types";

export default function Sidebar({
  children,
  dataTestId = "side-bar",
  drawerWidth = 240,
  open,
}: SideBarProps) {
  return (
    <Drawer
      data-testid={dataTestId}
      open={open}
      drawerWidth={drawerWidth}
      variant="persistent"
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>{children}</Box>
    </Drawer>
  );
}
