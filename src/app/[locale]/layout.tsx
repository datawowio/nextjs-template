import "server-only";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { routing } from "@/config/i18n";

import LocaleProvider from "@/providers/locale-provider";
import MuiThemeProvider from "@/providers/mui-theme-provider";

import type { BaseLayoutProps } from "@/types/component";
import type { Locale } from "@/types/locale";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
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
