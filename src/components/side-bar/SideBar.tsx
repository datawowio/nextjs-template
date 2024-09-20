import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Toolbar } from "./styles";

import type { SideBarProps } from "./types";

export default function Sidebar({
  children,
  dataTestId = "side-bar",
  drawerWidth = 240,
  open,
}: SideBarProps) {
  return (
    <Drawer
      data-test-id={dataTestId}
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>{children}</Box>
    </Drawer>
  );
}
