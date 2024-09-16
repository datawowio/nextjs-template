import Modal from "@/components/core/modal";
import ModalContent from "./ModalContent";
import type { ModalConfirmationProps } from "./types";

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
}: ModalConfirmationProps) {
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
    <Modal
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
    </Modal>
  );
}
