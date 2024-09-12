"use client";

import { useState } from "react";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningIcon from "@mui/icons-material/Warning";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import type { SnackbarProps } from "./types";

export default function Toast({ alertProps, ...props }: SnackbarProps) {
  const [open, setOpen] = useState(props.open);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar {...props} open={open} onClose={handleClose}>
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
        onClose={handleClose}
      >
        {props?.message}
      </Alert>
    </Snackbar>
  );
}
