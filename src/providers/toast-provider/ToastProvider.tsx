"use client";

import React from "react";
import { useImmer } from "use-immer";

import Toast from "@/components/toast";
import { ToastContext } from "@/contexts/toast";

import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import type { SyntheticEvent } from "react";
import type { State, ToastProviderProps } from "./types";

export default function ToastProvider({ children }: ToastProviderProps) {
  // Hook
  const [state, setState] = useImmer<State>({
    autoHideDuration: 3000,
    message: "",
    open: false,
    status: "info",
  });

  // Event handlers
  function handleClose(
    _event?: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) {
    if (reason === "clickaway") {
      return;
    }

    setState((draft) => {
      draft.open = false;
    });
  }

  function hideToast() {
    setState((draft) => {
      draft.open = false;
    });
  }

  function showToast(
    message: string,
    status: State["status"] = "info",
    autoHideDuration?: number,
  ) {
    setState((draft) => {
      draft.message = message;
      draft.status = status;
      draft.open = true;

      if (autoHideDuration) {
        draft.autoHideDuration = autoHideDuration;
      }
    });
  }

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
