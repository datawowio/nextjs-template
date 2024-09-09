import { render, screen } from "@testing-library/react";
import ColorSurface from "./ColorSurface";

describe("ColorSurface Component", () => {
  it("renders with default props (variant)", () => {
    render(<ColorSurface>Test Content</ColorSurface>);

    const paperElement = screen.getByText("Test Content");

    expect(paperElement).toBeInTheDocument();
    expect(paperElement).toHaveClass("MuiPaper-outlined");
  });

  it("applies custom props correctly", () => {
    render(<ColorSurface square>Test Content</ColorSurface>);

    const paperElement = screen.getByText("Test Content");

    expect(paperElement).not.toHaveClass("MuiPaper-rounded");
  });

  it("handles custom styles via sx prop", () => {
    render(<ColorSurface sx={{ padding: "1rem" }}>Test Content</ColorSurface>);

    const paperElement = screen.getByText("Test Content");

    expect(paperElement).toHaveStyle({ padding: "1rem" });
  });
});
