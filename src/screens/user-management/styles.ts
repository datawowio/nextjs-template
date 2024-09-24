import { colors } from "@/config/palette";
import type { SxProps, Theme } from "@mui/material";

const buttonCreate: SxProps<Theme> = {
  maxWidth: 144,
};

const card: SxProps<Theme> = {
  background: colors.base.white,
  borderRadius: "8px 8px 0 0",
};

const flexWrapper: SxProps<Theme> = {
  display: "flex",
  gap: 2,
  alignItems: "center",
};

const flexWrapperGrow: SxProps<Theme> = {
  display: "flex",
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

const selectStatus: SxProps<Theme> = {
  width: 244,
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
  selectStatus,
  wrapper,
};
