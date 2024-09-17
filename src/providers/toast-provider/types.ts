import type { ReactNode } from "react";
import type { ToastProps } from "@/components/core/toast";

export type State = Pick<
  ToastProps,
  "autoHideDuration" | "message" | "open" | "status"
>;

export interface ToastProviderProps {
  children: ReactNode;
}
