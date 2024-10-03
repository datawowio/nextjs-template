import { notFound } from "next/navigation";
import { defineRouting } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";

import getLocales from "@/locales";

import type { Locale } from "@/types/locale";

export const locales: Locale[] = ["en", "th"];

export const routing = defineRouting({
  defaultLocale: locales[0],
  locales,
});

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();
  return getLocales(locale as Locale);
});
