import type { Locale } from "./locale";

export interface BaseParams {
  readonly params: { locale: Locale };
}
