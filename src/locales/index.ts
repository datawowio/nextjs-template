import type { Locale } from "@/types/locale";

export default async function getLocales(locale: Locale = "en") {
  return {
    messages: {
      ...(await import(`./${locale}/${locale}.json`)).default,
    },
  };
}
