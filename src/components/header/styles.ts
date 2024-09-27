import { colors } from "@/config/palette";
import rem from "@/utils/rem";
import type { SxProps, Theme } from "@mui/material";

const backButton: SxProps<Theme> = {
  backgroundColor: colors.base.white,
  color: colors.icon.default.base,
  minWidth: rem(44),
  padding: rem(10),
  width: "fit-content",
};

const backIcon: SxProps<Theme> = {
  color: colors.icon.default.base,
  fontSize: rem(24),
  marginTop: -rem(4),
};

const title: SxProps<Theme> = {
  color: colors.text.primary.header,
};

const titleWrapper: SxProps<Theme> = {
  alignItems: "center",
  flexDirection: "row",
  gap: 2,
  mb: rem(10),
};

export const styles = { backButton, backIcon, title, titleWrapper };
