import type { CSSProperties } from "react";

export type StatusVariant =
  | "cancelled"
  | "completed"
  | "failed"
  | "ready"
  | "running";

export type CustomStatusVariantStyle = {
  [key in StatusVariant]: CSSProperties;
};

export interface LabelStatusProps {
  dataTestId?: string;
  status?: StatusVariant;
  text?: string;
}
