import MUIButton from "@mui/material/Button";
import type { ButtonProps } from "./types";

export default function Button(props: ButtonProps) {
  return <MUIButton {...props} />;
}
