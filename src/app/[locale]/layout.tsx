import LocaleProvider from "@/providers/locale-provider";
import MuiThemeProvider from "@/providers/mui-theme-provider";

import "@/styles";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description: "Exploring and learning Next.js framework",
  title: {
    default: "Next.js Playground",
    template: "%s | Next.js Playground",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body>
        <LocaleProvider>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
