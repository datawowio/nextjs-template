import { render, screen } from "@testing-library/react";
import TableDataSurface from "./TableDataSurface";

describe("TableDataSurface Component", () => {
  it('renders with the default "elevation" variant', () => {
    render(<TableDataSurface data-testid="surface" />);

    const surfaceElement = screen.getByTestId("surface");

    expect(surfaceElement).toBeInTheDocument();
    expect(surfaceElement).toHaveClass("MuiPaper-elevation0");
  });

  it("renders with a custom variant", () => {
    render(<TableDataSurface variant="outlined" data-testid="surface" />);

    const surfaceElement = screen.getByTestId("surface");

    expect(surfaceElement).toBeInTheDocument();
    expect(surfaceElement).toHaveClass("MuiPaper-outlined");
  });

  it("passes additional props correctly", () => {
    render(
      <TableDataSurface
        data-testid="surface"
        square={true}
        style={{ backgroundColor: "lightblue" }}
        variant="outlined"
      />,
    );

    const surfaceElement = screen.getByTestId("surface");

    expect(surfaceElement).toBeInTheDocument();
    expect(surfaceElement).toHaveStyle({ backgroundColor: "lightblue" });
    expect(surfaceElement).toHaveClass("MuiPaper-outlined");
    expect(surfaceElement).not.toHaveClass("MuiPaper-rounded");
  });
});
