"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningIcon from "@mui/icons-material/Warning";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import type { SnackbarProps } from "./types";

export default function Toast({ alertProps, ...props }: SnackbarProps) {
  return (
    <Snackbar
      {...props}
      open={props.open}
      onClose={props?.onClose}
      anchorOrigin={
        { vertical: "top", horizontal: "right" } ?? props.anchorOrigin
      }
    >
      <Alert
        {...alertProps}
        className={`${alertProps?.className} toast`}
        sx={{ ...alertProps?.sx, width: "100%" }}
        iconMapping={{
          success: <CheckCircleOutlineIcon />,
          error: <WarningIcon />,
          info: <InfoOutlinedIcon />,
          warning: <WarningIcon />,
        }}
        severity={props?.status}
        onClose={(e) => props?.onClose?.(e, "escapeKeyDown")}
      >
        {props?.message}
      </Alert>
    </Snackbar>
  );
}
