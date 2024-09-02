import { Typography as MuiTypography } from "@mui/material";
import type { TypographyProps } from "./types";
import { typographySx } from "./typography.styles";

export default function Typography(props: TypographyProps) {
  return (
    <MuiTypography
      sx={props.fontType && typographySx[props.fontType]}
      {...props}
    />
  );
}
