import { CSSProperties } from "react";

export type StatusVariant =
  | "cancelled"
  | "completed"
  | "failed"
  | "ready"
  | "running";

export type CustomStatusVariantStyle = {
  [key in StatusVariant]: CSSProperties;
};

export interface StatusPipelineProps {
  status?: StatusVariant;
  text?: string;
}
