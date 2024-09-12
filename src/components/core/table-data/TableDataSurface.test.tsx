import { render, screen } from "@testing-library/react";
import TableDataSurface from "./TableDataSurface";

describe("TableSurface Component", () => {
  it("renders with default props (variant)", () => {
    render(<TableDataSurface>Test Content</TableDataSurface>);

    const paperElement = screen.getByText("Test Content");

    expect(paperElement).toBeInTheDocument();
    expect(paperElement).toHaveClass("MuiPaper-outlined");
  });

  it("applies custom props correctly", () => {
    render(<TableDataSurface square>Test Content</TableDataSurface>);

    const paperElement = screen.getByText("Test Content");

    expect(paperElement).not.toHaveClass("MuiPaper-rounded");
  });

  it("handles custom styles via sx prop", () => {
    render(
      <TableDataSurface sx={{ padding: "1rem" }}>
        Test Content
      </TableDataSurface>,
    );

    const paperElement = screen.getByText("Test Content");

    expect(paperElement).toHaveStyle({ padding: "1rem" });
  });
});
