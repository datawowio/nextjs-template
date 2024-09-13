import { unstable_setRequestLocale } from "next-intl/server";

import { routing } from "@/config/i18n";

import LocaleProvider from "@/providers/locale-provider";
import MuiThemeProvider from "@/providers/mui-theme-provider";
import ToastProvider from "@/providers/toast-provider";

import "@/styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { BaseParams } from "@/types/params";

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

interface RootLayoutProps extends BaseParams {
  children: ReactNode;
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // Initial value
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider>
          <ToastProvider>
            <MuiThemeProvider>{children}</MuiThemeProvider>
          </ToastProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
