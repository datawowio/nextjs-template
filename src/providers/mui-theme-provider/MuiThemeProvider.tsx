import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { lightTheme } from "@/contexts/theme";

import type { MuiThemeProviderProps } from "./types";

export default function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
