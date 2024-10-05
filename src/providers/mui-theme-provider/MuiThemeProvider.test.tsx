import { render, screen } from "@testing-library/react";
import MuiThemeProvider from "./MuiThemeProvider";

describe("MuiThemeProvider", () => {
  context("when rendering the provider", () => {
    it("wraps the children with AppRouterCacheProvider and ThemeProvider", () => {
      const mockChildren = <div data-testid="child">Test Child</div>;
      render(<MuiThemeProvider>{mockChildren}</MuiThemeProvider>);
      expect(screen.getByTestId("child")).toBeInTheDocument();
    });
  });
});
