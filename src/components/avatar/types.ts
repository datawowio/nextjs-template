import type { AvatarProps as MUIAvatarProps } from "@mui/material/Avatar";
import type { CSSProperties } from "react";
import type { BaseComponent } from "@/types/components";

export type CustomSize = "sm" | "md" | "lg" | "xl" | "2xl";

export type CustomSizeStyle = {
  [key in CustomSize]: CSSProperties;
};

export interface AvatarProps extends BaseComponent, MUIAvatarProps {
  size?: CustomSize;
}
