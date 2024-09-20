import MUIButton from "@mui/material/Button";
import type { ButtonProps } from "./types";

export default function Button({
  dataTestId = "button",
  ...props
}: ButtonProps) {
  return <MUIButton {...props} data-test-id={dataTestId} />;
}
