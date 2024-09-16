import type { CSSProperties } from "react";
import type { AvatarProps as MUIAvatarProps } from "@mui/material/Avatar";

export type CustomSize = "sm" | "md" | "lg" | "xl" | "2xl";

export type CustomSizeStyle = {
  [key in CustomSize]: CSSProperties;
};

export interface AvatarProps extends MUIAvatarProps {
  size?: CustomSize;
}
