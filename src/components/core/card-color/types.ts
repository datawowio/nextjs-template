import type { CSSProperties } from "react";

export interface CardColorProps {
  colorName: string;
  hexCode: string;

  colorStyles?: CSSProperties;
}
