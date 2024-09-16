import MUIDialog from "@mui/material/Dialog";
import type { DialogProps } from "./types";

export default function Dialog({
  open,
  children = <></>,
  ...props
}: DialogProps) {
  return (
    <MUIDialog
      {...props}
      open={open}
      aria-labelledby="dialog-dialog-title"
      aria-describedby="dialog-dialog-description"
    >
      {children}
    </MUIDialog>
  );
}
