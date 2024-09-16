import type { ModalProps as MUIModalProps } from "@mui/material/Modal";
import type { CardProps as MUICardProps } from "@mui/material/Card";

interface ModalConfirmationProps {
  title?: string;
  description?: string;
  onConfirm?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  onCancel?: (e?: {}, reason?: "backdropClick" | "escapeKeyDown") => void;
  confirmText?: string;
  cancelText?: string;
}

export interface ModalProps extends MUIModalProps, ModalConfirmationProps {}

export interface CardProps extends MUICardProps, ModalConfirmationProps {}
