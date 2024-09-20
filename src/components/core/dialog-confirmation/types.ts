import type { DialogProps as MUIDialogProps } from "@mui/material/Dialog";
import type { ReactNode } from "react";

export interface ConfirmationProps {
  cancelText?: string;
  children?: ReactNode;
  confirmText?: string;
  dataTestId?: string;
  description?: string;
  onCancel?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  onConfirm?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  title?: string;
}

export interface DialogConfirmationProps
  extends MUIDialogProps,
    ConfirmationProps {}
