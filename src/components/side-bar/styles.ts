import { styled } from "@mui/material";
import MuiToolbar from "@mui/material/Toolbar";
import rem from "@/utils/rem";

export const Toolbar = styled(MuiToolbar)(() => ({
  "&.MuiToolbar-root": {
    minHeight: rem(75),
  },
}));
