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
      data-testid={dataTestId}
      open={open}
      sx={{
        width: { xs: "100%", md: drawerWidth },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: { xs: "100%", md: drawerWidth },
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
