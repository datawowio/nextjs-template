import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

// noinspection ES6PreferShortImport
import { darkTheme, lightTheme } from "../src/contexts/theme";
import nextIntl from "./next-intl";

import type { Preview } from "@storybook/react";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    Provider: ThemeProvider,
    defaultTheme: "light",
    themes: {
      dark: darkTheme,
      light: lightTheme,
    },
  }),
];

const preview: Preview = {
  initialGlobals: {
    locale: "en",
    locales: {
      en: { icon: "🇺🇸", title: "English", right: "EN" },
      th: { icon: "🇹🇭", title: "ไทย", right: "TH" },
    },
  },
  parameters: {
    // Don't worry about the warning message when running Storybook; this is a valid setup
    // SEE: https://storybook.js.org/recipes/@mui/material
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextIntl,
  },
};

export default preview;
