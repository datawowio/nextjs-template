import type { Locale } from "./locale";

export type Params = Promise<{ locale: Locale }>;

export interface BaseParams {
  params: Params;
}
