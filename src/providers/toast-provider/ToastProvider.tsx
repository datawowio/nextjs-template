"use client";

import React from "react";
import { useImmer } from "use-immer";
import Toast from "@/components/core/toast";
import { ToastContext } from "@/contexts/toast";

import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import type { SnackbarProps } from "@/components/core/toast";
import type { ToastProviderProps } from "./types";

export default function ToastProvider({ children }: ToastProviderProps) {
  const [state, setState] = useImmer<SnackbarProps>({
    message: "",
    status: "info",
    open: false,
    autoHideDuration: 3000,
  });

  const showToast = (
    message: string,
    status: SnackbarProps["status"] = "info",
    autoHideDuration?: number,
  ) => {
    setState((draft) => {
      draft.message = message;
      draft.status = status;
      draft.open = true;
      if (autoHideDuration) {
        draft.autoHideDuration = autoHideDuration;
      }
    });
  };

  const hideToast = () => {
    setState((draft) => {
      draft.open = false;
    });
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setState((draft) => {
      draft.open = false;
    });
  };

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Toast
        open={state.open}
        onClose={handleClose}
        message={state.message}
        status={state.status}
        autoHideDuration={state.autoHideDuration}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
    </ToastContext.Provider>
  );
}
