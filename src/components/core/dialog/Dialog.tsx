import MUIDialog from "@mui/material/Dialog";
import type { DialogProps } from "./types";

export default function Dialog({ children, open, ...props }: DialogProps) {
  return (
    <MUIDialog
      {...props}
      open={open}
      aria-describedby="dialog-dialog-description"
      aria-labelledby="dialog-dialog-title"
    >
      {children}
    </MUIDialog>
  );
}
