import { colors } from "@/config/palette";
import rem from "@/utils/rem";
import type { SxProps, Theme } from "@mui/material";

const buttonActionWrapper: SxProps<Theme> = {
  display: "flex",
  maxWidth: 203,
  justifyContent: "center",
  ml: "auto",
};

const buttonCreate: SxProps<Theme> = {
  maxWidth: 144,
};

const buttonClose: SxProps<Theme> = {
  width: "fit-content",
  minWidth: rem(40),
  p: rem(10),
};

const card: SxProps<Theme> = {
  background: colors.base.white,
  borderRadius: "8px 8px 0 0",
};

const closeIcon: SxProps<Theme> = {
  margin: 0,
  fontSize: rem(24),
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

const mailIcon: SxProps<Theme> = {
  fontSize: rem(16),
  color: colors.icon.default.white,
};

const root: SxProps<Theme> = {
  gap: 3,
};

const refreshIcon: SxProps<Theme> = {
  color: colors.text.info.default,
  flexGrow: 1,
};

const selectLimit: SxProps<Theme> = {
  width: 100,
};

const textDefaultColor: SxProps<Theme> = {
  color: colors.text.info.default,
};

const textWhiteColor: SxProps<Theme> = {
  color: colors.base.white,
};

const selectStatus: SxProps<Theme> = {
  width: 244,
};

const wrapper: SxProps<Theme> = {
  p: 2,
};

export const styles = {
  buttonActionWrapper,
  buttonCreate,
  buttonClose,
  card,
  closeIcon,
  flexWrapper,
  flexWrapperGrow,
  iconSearch,
  inputSearch,
  mailIcon,
  root,
  refreshIcon,
  selectLimit,
  selectStatus,
  textDefaultColor,
  textWhiteColor,
  wrapper,
};
