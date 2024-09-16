import type { DialogProps as MUIDialogProps } from "@mui/material/Dialog";

export interface ConfirmationProps {
  title?: string;
  children?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  description?: string;
  onConfirm?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  onCancel?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
}

export interface DialogConfirmationProps
  extends MUIDialogProps,
    ConfirmationProps {}
