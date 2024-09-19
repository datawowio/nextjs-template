import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

import { AppBar, IconButton, Toolbar } from "./styles";
import type { NavbarProps } from "./types";

export default function Navbar({
  handleDrawerToggle,
  logo,
  profile,
}: NavbarProps) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          {logo}
        </Box>
        {profile}
      </Toolbar>
    </AppBar>
  );
}
