import { render, screen } from "@testing-library/react";
import TableDataSurface from "./TableDataSurface";

describe("TableDataSurface Component", () => {
  it('renders with the default "outlined" variant', () => {
    render(<TableDataSurface data-testid="surface" />);

    const surfaceElement = screen.getByTestId("surface");

    expect(surfaceElement).toBeInTheDocument();
    expect(surfaceElement).toHaveClass("MuiPaper-outlined");
  });

  it("renders with a custom variant", () => {
    render(<TableDataSurface variant="elevation" data-testid="surface" />);

    const surfaceElement = screen.getByTestId("surface");

    expect(surfaceElement).toBeInTheDocument();
    expect(surfaceElement).toHaveClass("MuiPaper-elevation");
  });

  it("passes additional props correctly", () => {
    render(
      <TableDataSurface
        data-testid="surface"
        square={true}
        style={{ backgroundColor: "lightblue" }}
        variant="elevation"
      />,
    );

    const surfaceElement = screen.getByTestId("surface");

    expect(surfaceElement).toBeInTheDocument();
    expect(surfaceElement).toHaveStyle({ backgroundColor: "lightblue" });
    expect(surfaceElement).toHaveClass("MuiPaper-elevation");
    expect(surfaceElement).not.toHaveClass("MuiPaper-rounded");
  });
});
