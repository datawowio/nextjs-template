import MUIAvatar from "@mui/material/Avatar";

import fallbackAvatar from "@/assets/images/avatar/fallback-avatar.png";
import type { AvatarProps } from "./types";
import { customSizeStyle } from "./styles";

export default function Avatar({
  src = fallbackAvatar.src,
  size = "lg",
  sx,
  ...props
}: AvatarProps) {
  return <MUIAvatar {...props} sx={{ ...customSizeStyle[size], ...sx }} />;
}
