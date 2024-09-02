import { Typography as MuiTypography } from "@mui/material";
import { typographySx } from "./typography.styles";

import type { TypographyProps } from "./types";

export default function Typography(props: TypographyProps) {
  return (
    <MuiTypography
      sx={props.fontType && typographySx[props.fontType]}
      {...props}
    />
  );
}
