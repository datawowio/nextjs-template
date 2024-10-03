import type { Locale } from "@/types/locale";

// Don't forget to import in alphabetical order.
export default async function getLocales(locale: Locale = "en") {
  return {
    messages: {
      ...(await import(`./${locale}/common.json`)).default,
    },
  };
}
