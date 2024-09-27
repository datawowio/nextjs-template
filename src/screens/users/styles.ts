import { colors } from "@/config/palette";
import rem from "@/utils/rem";
import type { SxProps, Theme } from "@mui/material";

const buttonCreate: SxProps<Theme> = {
  width: { xs: 40, md: 144 },
  minWidth: { xs: 40 },
  height: { xs: rem(40), md: rem(44) },
  [".MuiButton-startIcon"]: {
    marginRight: { xs: 0, md: rem(8) },
    marginLeft: { xs: 0, md: -rem(4) },
  },
};

const card: SxProps<Theme> = {
  background: colors.base.white,
  borderRadius: "8px 8px 0 0",
  maxWidth: "100vw",
};

const flexWrapper: SxProps<Theme> = {
  display: { xs: "block", md: "flex" },
  gap: 2,
  alignItems: "center",
};

const flexWrapperGrow: SxProps<Theme> = {
  display: "flex",
  flexWrap: { xs: "wrap", md: "initial" },
  gap: 2,
  alignItems: "center",
  flexGrow: 1,
};

const inputSearch: SxProps<Theme> = {
  flexGrow: 1,
};

const iconSearch: SxProps<Theme> = {
  color: colors.icon.placeholder.default,
};

const root: SxProps<Theme> = {
  gap: 3,
};

const selectLimit: SxProps<Theme> = {
  width: 100,
};

const selectLimitWrapper: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  gap: 2,
  alignItems: "center",
};

const selectStatus: SxProps<Theme> = {
  width: { xs: "100%", md: 244 },
};

const wrapper: SxProps<Theme> = {
  p: 2,
};

export const styles = {
  buttonCreate,
  card,
  flexWrapper,
  flexWrapperGrow,
  iconSearch,
  inputSearch,
  root,
  selectLimit,
  selectLimitWrapper,
  selectStatus,
  wrapper,
};