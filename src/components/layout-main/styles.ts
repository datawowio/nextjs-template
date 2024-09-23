import { styled } from "@mui/material";
import MUIBox from "@mui/material/Box";
import { colors } from "@/config/palette";
import rem from "@/utils/rem";

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
  drawerWidth: number;
}>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  backgroundColor: colors.bg.lightGray,
  boxSizing: "border-box",
  padding: rem(16),
  minHeight: "100vh",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${rem(drawerWidth)}`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  minHeight: rem(75),
  justifyContent: "flex-end",
}));

export const Box = styled(MUIBox)(() => ({
  display: "flex",
}));