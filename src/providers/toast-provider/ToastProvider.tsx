"use client";

import React, { createContext, useContext } from "react";
import { useImmer } from "use-immer";
import Toast from "@/components/core/toast";

import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import type { SnackbarProps } from "@/components/core/toast";
import type { ToastContextProps, ToastProviderProps } from "./types";

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export default function ToastProvider({ children }: ToastProviderProps) {
  const [toastProps, updateToastProps] = useImmer<SnackbarProps>({
    message: "",
    status: "info",
    open: false,
  });

  const showToast = (
    message: string,
    status: SnackbarProps["status"] = "info",
  ) => {
    updateToastProps((draft) => {
      draft.message = message;
      draft.status = status;
      draft.open = true;
    });
  };

  const hideToast = () => {
    updateToastProps((draft) => {
      draft.open = false;
    });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    updateToastProps((draft) => {
      draft.open = false;
    });
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Toast
        open={toastProps.open}
        onClose={handleClose}
        message={toastProps.message}
        status={toastProps.status}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </ToastContext.Provider>
  );
}
