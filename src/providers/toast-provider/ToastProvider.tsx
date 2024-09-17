"use client";

import React from "react";
import { useImmer } from "use-immer";

import Toast from "@/components/core/toast";
import { ToastContext } from "@/contexts/toast";

import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import type { SyntheticEvent } from "react";
import type { State, ToastProviderProps } from "./types";

export default function ToastProvider({ children }: ToastProviderProps) {
  const [state, setState] = useImmer<State>({
    autoHideDuration: 3000,
    message: "",
    open: false,
    status: "info",
  });

  const showToast = (
    message: string,
    status: State["status"] = "info",
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
    _event?: SyntheticEvent | Event,
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
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={state.autoHideDuration}
        message={state.message}
        onClose={handleClose}
        open={state.open}
        status={state.status}
      />
    </ToastContext.Provider>
  );
}
