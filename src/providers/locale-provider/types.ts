import type { ReactNode } from "react";
import type { Locale } from "@/types/locale";

export interface LocaleProviderProps {
  children?: ReactNode;
  locale?: Locale;
}
