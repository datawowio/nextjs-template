import type { AlertProps as MUIAlertProps } from "@mui/material/Alert";
import type { SnackbarProps as MUISnackbarprops } from "@mui/material/Snackbar";
import type { BaseComponent } from "@/types/components";

export interface AlertProps extends MUIAlertProps {}

export interface ToastProps extends BaseComponent, MUISnackbarprops {
  alertProps?: AlertProps;
  status?: AlertProps["severity"];
}
