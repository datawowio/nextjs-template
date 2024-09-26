import type { DialogProps as MUIDialogProps } from "@mui/material/Dialog";
import type { ReactNode } from "react";
import type { BaseComponent } from "@/types/components";

export interface ConfirmationProps {
  cancelText?: string;
  children?: ReactNode;
  confirmText?: string;
  description?: string;
  onCancel?: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  onConfirm?: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  title?: string;
}

export interface DialogConfirmationProps
  extends BaseComponent,
    MUIDialogProps,
    ConfirmationProps {}
