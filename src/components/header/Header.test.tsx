import { render, screen } from "@testing-library/react";
import Typography from "@/components/typography";
import { colors } from "@/config/palette";

import Header from "./Header";

jest.mock("@/components/typography", () =>
  jest.fn(({ children }) => <div data-testid="typography">{children}</div>),
);

describe("Header Component", () => {
  it("renders the text and children properly", () => {
    const mockText = "Test Header";
    const mockChildren = <div>Test Children</div>;

    render(<Header text={mockText}>{mockChildren}</Header>);

    expect(screen.getByText(mockText)).toBeInTheDocument();

    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });

  it("applies custom sx styles", () => {
    const mockSx = { backgroundColor: "red" };

    const { container } = render(<Header text="Styled Header" sx={mockSx} />);

    expect(container.firstChild).toHaveStyle("background-color: red");
  });

  it("applies the correct styles to Typography", () => {
    render(<Header text="Styled Header" />);

    expect(Typography).toHaveBeenCalledWith(
      expect.objectContaining({
        customVariant: "boldDisplayMD",
        sx: { color: colors.text.primary.header },
        children: "Styled Header",
      }),
      {},
    );
  });
});
