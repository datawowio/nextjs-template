import type { SxProps, Theme } from "@mui/system";
import type { CSSProperties, ReactNode } from "react";

import type { BaseParams } from "./params";

export interface BaseComponentProps {
  dataTestId?: string;
}

export interface BaseLayoutProps extends BaseParams {
  children?: ReactNode;
}

export interface SxInlineStyles {
  [key: string]: SxProps<Theme>;
}

export interface InlineStyles {
  [key: string]: CSSProperties;
}
