import type { ModalProps as MUIModalProps } from "@mui/material/Modal";
import type { CardProps as MUICardProps } from "@mui/material/Card";

interface ConfirmationProps {
  title?: string;
  description?: string;
  onConfirm?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  onCancel?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  confirmText?: string;
  cancelText?: string;
}

export interface ModalConfirmationProps
  extends MUIModalProps,
    ConfirmationProps {}

export interface CardProps extends MUICardProps, ConfirmationProps {}
