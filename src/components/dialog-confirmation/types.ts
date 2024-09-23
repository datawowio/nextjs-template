import type { DialogProps as MUIDialogProps } from "@mui/material/Dialog";
import type { ReactNode } from "react";
import type { BaseComponent } from "@/types/components";

export interface ConfirmationProps {
  cancelText?: string;
  children?: ReactNode;
  confirmText?: string;
  description?: string;
  onCancel?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  onConfirm?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  title?: string;
}

export interface DialogConfirmationProps
  extends BaseComponent,
    MUIDialogProps,
    ConfirmationProps {}