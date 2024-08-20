import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/contexts/theme";

import type { MuiThemeProviderProps } from "./types";

export default function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
