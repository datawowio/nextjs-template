import Box from "@mui/material/Box";
import Image from "next/image";
import { LogoProps } from "./types";

export default function Logo({
  alt,
  dataTestId = "logo",
  imageSrc,
  width,
  height,
}: LogoProps) {
  return (
    <Box sx={{ position: "relative", width, height }}>
      <Image data-testid={dataTestId} src={imageSrc} alt={alt} fill />
    </Box>
  );
}
