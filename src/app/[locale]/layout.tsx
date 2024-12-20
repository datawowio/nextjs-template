import "server-only";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { routing } from "@/config/i18n";

import LocaleProvider from "@/providers/locale-provider";
import MuiThemeProvider from "@/providers/mui-theme-provider";

import type { BaseLayoutProps } from "@/types/component";
import type { Params } from "@/types/params";

export async function generateMetadata(params: Params) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "common.metadata",
  });

  return {
    description: t("description"),
    title: {
      default: t("title.default"),
      template: t("title.template"),
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: BaseLayoutProps) {
  // Initialize
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

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
