import type { AlertProps as MUIAlertProps } from "@mui/material/Alert";
import type { SnackbarProps as MUISnackbarprops } from "@mui/material/Snackbar";

export interface AlertProps extends MUIAlertProps {}

export interface ToastProps extends MUISnackbarprops {
  alertProps?: AlertProps;
  dataTestId?: string;
  status?: AlertProps["severity"];
}
