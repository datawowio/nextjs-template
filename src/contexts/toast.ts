import { createContext } from "react";
import type { SnackbarProps } from "@/components/core/toast";

interface ToastContextProps {
  showToast: (message: string, status?: SnackbarProps["status"]) => void;
  hideToast: () => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined,
);
