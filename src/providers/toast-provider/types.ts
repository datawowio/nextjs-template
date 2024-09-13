import type { ReactNode } from "react";
import type { SnackbarProps } from "@/components/core/toast";

export interface ToastContextProps {
  showToast: (message: string, status?: SnackbarProps["status"]) => void;
  hideToast: () => void;
}

export interface ToastProviderProps {
  children: ReactNode;
}
