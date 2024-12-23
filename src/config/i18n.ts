import { defineRouting } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";

import getLocales from "@/locales";

import type { Locale } from "@/types/locale";

export const locales: Locale[] = ["en", "th"];

export const routing = defineRouting({
  defaultLocale: locales[0],
  locales,
});

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Load locale messages
  const messages = await getLocales(locale as Locale);

  return {
    locale,
    messages,
  };
});
