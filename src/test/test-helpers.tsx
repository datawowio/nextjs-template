import { ThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import { locales } from "@/config/i18n";
import { lightTheme } from "@/contexts/theme";
import messages from "@/locales/en/en.json";

import type { ReactNode } from "react";

export function renderWithProviders(children: ReactNode) {
  return render(
    <NextIntlClientProvider locale={locales[0]} messages={messages}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </NextIntlClientProvider>,
  );
}
