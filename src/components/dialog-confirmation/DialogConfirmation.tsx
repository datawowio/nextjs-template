import Dialog from "@/components/dialog";
import DialogConfirmationContent from "./DialogConfirmationContent";

import type { DialogConfirmationProps } from "./types";

export default function DialogConfirmation({
  cancelText,
  children,
  confirmText,
  dataTestId = "dialog-confirmation",
  description,
  onClose,
  onCancel,
  onConfirm,
  open,
  title,
  ...props
}: DialogConfirmationProps) {
  // Hooks
  function onCancelHandler(
    event?: {},
    reason?: "backdropClick" | "escapeKeyDown",
  ) {
    onClose?.({}, "backdropClick");
    onCancel?.(event, reason);
  }

  function onConfirmHandler(
    event?: {},
    reason?: "backdropClick" | "escapeKeyDown",
  ) {
    onConfirm?.(event, reason);
  }

  return (
    <Dialog
      {...props}
      aria-describedby="dialog-dialog-description"
      aria-labelledby="dialog-dialog-title"
      className="dialog-confirmation"
      data-testid={dataTestId}
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
