import MUIAvatar from "@mui/material/Avatar";

import fallbackAvatar from "@/assets/images/avatar/fallback-avatar.png";
import type { AvatarProps } from "./types";
import { customSizeStyle } from "./styles";

export default function Avatar({
  size = "lg",
  src = fallbackAvatar.src,
  ...props
}: AvatarProps) {
  return (
    <MUIAvatar
      {...props}
      src={src}
      sx={{ ...customSizeStyle[size], ...props.sx }}
    />
  );
}
