import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "th"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  // Don't forget to import in alphabetical order.
  return {
    messages: {
      ...(await import(`../locales/${locale}/common.json`)).default,
      pages: {
        ...(await import(`../locales/${locale}/pages/home.json`)).default,
      },
    },
  };
});