import MUIModal from "@mui/material/Modal";
import ModalContent from "./ModalContent";
import type { ModalProps } from "./types";

export default function ModalConfirmation({
  open,
  children = <></>,
  cancelText,
  confirmText,
  description,
  title,
  onClose,
  onCancel,
  onConfirm,
  ...props
}: ModalProps) {
  const onCancelHandler = (
    e?: {},
    reason?: "backdropClick" | "escapeKeyDown",
  ) => {
    onClose?.({}, "backdropClick");
    onCancel?.(e, reason);
  };

  const onConfirmHandler = (
    e?: {},
    reason?: "backdropClick" | "escapeKeyDown",
  ) => {
    onConfirm?.(e, reason);
  };
  return (
    <MUIModal
      {...props}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent
        title={title}
        description={description}
        cancelText={cancelText}
        confirmText={confirmText}
        onCancel={onCancelHandler}
        onConfirm={onConfirmHandler}
      >
        {children}
      </ModalContent>
    </MUIModal>
  );
}
