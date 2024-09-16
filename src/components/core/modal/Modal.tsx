import MUIModal from "@mui/material/Modal";
import type { ModalProps } from "./types";

export default function Modal({
  open,
  children = <></>,
  ...props
}: ModalProps) {
  return (
    <MUIModal
      {...props}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </MUIModal>
  );
}
