import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

import { AppBar, IconButton, Toolbar } from "./styles";
import type { NavBarProps } from "./types";

export default function Navbar({
  dataTestId = "nav-bar",
  handleDrawerToggle,
  logo,
  profile,
}: NavBarProps) {
  return (
    <AppBar position="fixed" data-testid={dataTestId}>
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
