import Dialog from "@/components/core/dialog";
import DialogConfirmationContent from "./DialogConfirmationContent";

import type { DialogConfirmationProps } from "./types";

export default function DialogConfirmation({
  cancelText,
  children,
  confirmText,
  description,
  onClose,
  onCancel,
  onConfirm,
  open,
  title,
  ...props
}: DialogConfirmationProps) {
  // Hooks
  function onCancelHandler(e?: {}, reason?: "backdropClick" | "escapeKeyDown") {
    onClose?.({}, "backdropClick");
    onCancel?.(e, reason);
  }

  function onConfirmHandler(
    e?: {},
    reason?: "backdropClick" | "escapeKeyDown",
  ) {
    onConfirm?.(e, reason);
  }

  return (
    <Dialog
      {...props}
      aria-describedby="dialog-dialog-description"
      aria-labelledby="dialog-dialog-title"
      className="dialog-confirmation"
      onClose={onClose}
      open={open}
    >
      <DialogConfirmationContent
        cancelText={cancelText}
        confirmText={confirmText}
        description={description}
        onCancel={onCancelHandler}
        onConfirm={onConfirmHandler}
        title={title}
      >
        {children}
      </DialogConfirmationContent>
    </Dialog>
  );
}
