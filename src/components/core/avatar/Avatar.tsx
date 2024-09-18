import MUIAvatar from "@mui/material/Avatar";

import fallbackAvatar from "@/assets/images/avatar/fallback-avatar.png";
import { customSizeStyle } from "./styles";
import type { AvatarProps } from "./types";

export default function Avatar({
  alt = "avatar",
  src = fallbackAvatar.src,
  size = "lg",
  sx,
  ...props
}: AvatarProps) {
  return (
    <MUIAvatar
      {...props}
      alt={alt}
      src={src}
      sx={{ ...customSizeStyle[size], ...sx }}
    />
  );
}
