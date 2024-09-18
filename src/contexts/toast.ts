import { createContext } from "react";
import type { ToastProps } from "@/components/core/toast";

export interface ToastContextValue {
  showToast: (
    message: string,
    status?: ToastProps["status"],
    autoHideDuration?: number,
  ) => void;
  hideToast: () => void;
}

export const ToastContext = createContext<ToastContextValue | undefined>(
  undefined,
);
