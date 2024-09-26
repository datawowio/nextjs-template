import type { ReactNode } from "react";
import type { ToastProps } from "@/components/toast";

export type State = Pick<
  ToastProps,
  "autoHideDuration" | "message" | "open" | "status"
>;

export interface ToastProviderProps {
  children: ReactNode;
}
