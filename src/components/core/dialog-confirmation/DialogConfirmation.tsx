import Dialog from "@/components/core/dialog";
import DialogConfirmationContent from "./DialogConfirmationContent";
import type { DialogConfirmationProps } from "./types";

export default function DialogConfirmation({
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
}: DialogConfirmationProps) {
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
    <Dialog
      {...props}
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-dialog-title"
      aria-describedby="dialog-dialog-description"
      className="dialog-confirmation"
    >
      <DialogConfirmationContent
        title={title}
        description={description}
        cancelText={cancelText}
        confirmText={confirmText}
        onCancel={onCancelHandler}
        onConfirm={onConfirmHandler}
      >
        {children}
      </DialogConfirmationContent>
    </Dialog>
  );
}
