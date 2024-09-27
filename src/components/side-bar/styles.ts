import { styled, SxProps } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiToolbar from "@mui/material/Toolbar";
import rem from "@/utils/rem";

export const Toolbar = styled(MuiToolbar)(() => ({
  "&.MuiToolbar-root": {
    minHeight: rem(75),
  },
}));

export const Drawer = styled(MuiDrawer)<{ drawerWidth: number }>(
  ({ theme, drawerWidth }) => ({
    "width": `${drawerWidth}px`,
    "flexShrink": 0,
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: `${drawerWidth}px`,
    },
    [theme.breakpoints.down("md")]: {
      "width": "100%",
      "& .MuiDrawer-paper": {
        width: "100%",
      },
    },
  }),
);
