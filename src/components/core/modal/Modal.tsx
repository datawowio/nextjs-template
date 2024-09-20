import MUIModal from "@mui/material/Modal";
import type { ModalProps } from "./types";

export default function Modal({
  dataTestId = "modal",
  open,
  children,
  ...props
}: ModalProps) {
  return (
    <MUIModal
      {...props}
      data-testid={dataTestId}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </MUIModal>
  );
}
