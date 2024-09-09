import { hexToRgb } from "@mui/material";
import { render, screen } from "@testing-library/react";

import CardColor from "./CardColor";

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  hexToRgb: jest.fn(),
}));

describe("CardColor Component", () => {
  const mockHexCode = "#ff5733";
  const mockRgbCode = "rgb(255, 87, 51)";
  const mockColorName = "Fiery Red";
  const mockColorStyles = { backgroundColor: mockHexCode };

  beforeEach(() => {
    (hexToRgb as jest.Mock).mockReturnValue(mockRgbCode);
  });

  it("renders color name and hex code", () => {
    render(
      <CardColor
        colorName={mockColorName}
        hexCode={mockHexCode}
        colorStyles={mockColorStyles}
      />,
    );

    const colorNameElement = screen.getByText(mockColorName);
    expect(colorNameElement).toBeInTheDocument();

    const hexCodeElement = screen.getByText(mockHexCode);
    expect(hexCodeElement).toBeInTheDocument();
  });

  it("displays RGB value based on the hex code", () => {
    render(
      <CardColor
        colorName={mockColorName}
        hexCode={mockHexCode}
        colorStyles={mockColorStyles}
      />,
    );

    const rgbElement = screen.getByText(mockRgbCode);

    expect(rgbElement).toBeInTheDocument();
    expect(hexToRgb).toHaveBeenCalledWith(mockHexCode);
  });

  it("applies custom color styles to the Box component", () => {
    render(
      <CardColor
        colorName={mockColorName}
        hexCode={mockHexCode}
        colorStyles={mockColorStyles}
      />,
    );

    const boxElement = screen.getByRole("presentation");

    expect(boxElement).toHaveStyle({ backgroundColor: mockHexCode });
  });
});
