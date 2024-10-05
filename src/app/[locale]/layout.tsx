import "server-only";
import { unstable_setRequestLocale } from "next-intl/server";

import { routing } from "@/config/i18n";

import LocaleProvider from "@/providers/locale-provider";
import MuiThemeProvider from "@/providers/mui-theme-provider";

import type { Metadata } from "next";
import type { BaseLayoutProps } from "@/types/component";

export const metadata: Metadata = {
  description: "Datawow Next.js Boilerplate, built with App Router",
  title: {
    default: "Next.js Boilerplate",
    template: "%s | Next.js Boilerplate",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: BaseLayoutProps) {
  // Initial value
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider locale={locale}>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
