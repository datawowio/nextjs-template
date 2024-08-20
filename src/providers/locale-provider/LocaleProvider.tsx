import "server-only";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { LocaleProviderProps } from "./types";

export default async function LocaleProvider({
  children,
}: LocaleProviderProps) {
  // Hook
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
