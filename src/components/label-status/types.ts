import type { CSSProperties } from "react";
import type { BaseComponent } from "@/types/components";

export type StatusVariant =
  | "cancelled"
  | "completed"
  | "failed"
  | "ready"
  | "running";

export type CustomStatusVariantStyle = {
  [key in StatusVariant]: CSSProperties;
};

export interface LabelStatusProps extends BaseComponent {
  status?: StatusVariant;
  text?: string;
}
