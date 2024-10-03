import { darkTheme, fontFamily, lightTheme } from "./theme";

describe("Theme context", () => {
  it("creates a dark theme with correct palette and typography", () => {
    expect(darkTheme.palette.mode).toBe("dark");
    expect(darkTheme.typography.fontFamily).toEqual(fontFamily);
  });

  it("creates a light theme with correct palette and typography", () => {
    expect(lightTheme.palette.mode).toBe("light");
    expect(lightTheme.typography.fontFamily).toEqual(fontFamily);
  });
});
