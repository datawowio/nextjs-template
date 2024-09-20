import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

// @ts-ignore
import { darkTheme, lightTheme } from "@/contexts/theme";
import "@/styles/global.css";

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
    layout: "fullscreen",
  },
};

export default preview;
