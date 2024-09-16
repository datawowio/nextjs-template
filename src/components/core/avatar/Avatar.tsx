import MUIAvatar from "@mui/material/Avatar";

import fallbackAvatar from "@/assets/images/avatar/fallback-avatar.png";
import { customSizeStyle } from "./styles";
import type { AvatarProps } from "./types";

export default function Avatar({
  src = fallbackAvatar.src,
  size = "lg",
  sx,
  ...props
}: AvatarProps) {
  return (
    <MUIAvatar {...props} src={src} sx={{ ...customSizeStyle[size], ...sx }} />
  );
}
