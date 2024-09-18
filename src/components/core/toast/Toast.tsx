"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningIcon from "@mui/icons-material/Warning";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import clsx from "clsx";

import type { ToastProps } from "./types";

export default function Toast({
  alertProps,
  anchorOrigin,
  message,
  onClose,
  open,
  status,
  ...props
}: ToastProps) {
  return (
    <Snackbar
      {...props}
      anchorOrigin={anchorOrigin || { vertical: "top", horizontal: "right" }}
      open={open}
      onClose={onClose}
    >
      <Alert
        {...alertProps}
        className={clsx(["toast", alertProps?.className])}
        iconMapping={{
          error: <WarningIcon />,
          info: <InfoOutlinedIcon />,
          success: <CheckCircleOutlineIcon />,
          warning: <WarningIcon />,
        }}
        onClose={(e) => onClose?.(e, "escapeKeyDown")}
        severity={status}
        sx={{ width: "100%", ...alertProps?.sx }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
