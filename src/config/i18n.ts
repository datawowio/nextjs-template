import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import getLocales from "@/locales";

import type { Locale } from "@/types/locale";

export const locales: Locale[] = ["en", "th"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  return getLocales(locale as Locale);
});
