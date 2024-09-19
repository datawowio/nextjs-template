import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Toolbar } from "./styles";

import type { SideBarProps } from "./types";

export default function Sidebar({
  children,
  open,
  drawerWidth = 240,
}: SideBarProps) {
  return (
    <Drawer
      variant="persistent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      open={open}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>{children}</Box>
    </Drawer>
  );
}
