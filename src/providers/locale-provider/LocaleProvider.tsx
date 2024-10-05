import "server-only";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { LocaleProviderProps } from "./types";

export default async function LocaleProvider({
  children,
  locale = "en",
}: LocaleProviderProps) {
  // Initial value
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
