import Box from "@mui/material/Box";
import Image from "next/image";

import { styles } from "./styles";

import type { LogoProps } from "./types";

export default function Logo({
  alt,
  dataTestId = "logo",
  height,
  src,
  width,
}: LogoProps) {
  return (
    <Box height={height} sx={styles.root} width={width}>
      <Image alt={alt} data-testid={dataTestId} fill src={src} />
    </Box>
  );
}
