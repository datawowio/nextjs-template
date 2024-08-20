import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "@/contexts/theme";

import type { MuiThemeProviderProps } from "./types";

export default function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
