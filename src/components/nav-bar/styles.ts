import { styled } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MuiIconButton from "@mui/material/IconButton";
import MuiToolbar from "@mui/material/Toolbar";

import { colors } from "@/config/palette";
import rem from "@/utils/rem";

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: colors.base.white,
  boxShadow: "none",
  borderBottom: `solid 1px ${colors.border.default.base}`,
  zIndex: theme.zIndex.drawer + 1,
}));

export const IconButton = styled(MuiIconButton)(() => ({
  marginRight: 2,
  color: colors.icon.default.darkGray,
}));

export const Toolbar = styled(MuiToolbar)(() => ({
  "justifyContent": "space-between",
  "&.MuiToolbar-root": {
    padding: `0 ${rem(16)}`,
    minHeight: rem(75),
  },
}));
