import type { Locale } from "@/types/locale";

export default async function getLocales(locale: Locale = "en") {
  return (await import(`./${locale}/${locale}.json`)).default;
}
