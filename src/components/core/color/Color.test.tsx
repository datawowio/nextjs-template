import { render, screen } from "@testing-library/react";
import Color from "./Color";

describe("Color Component", () => {
  const mockTones = [
    {
      key: "Primary",
      hex: "#ff5733",
      rgb: "rgb(255, 87, 51)",
      cssVar: "--color-primary",
    },
    {
      key: "Secondary",
      hex: "#33ff57",
      rgb: "rgb(51, 255, 87)",
      cssVar: "--color-secondary",
    },
  ];

  it("renders the Color component with a title", () => {
    render(<Color title="Test Colors" tones={mockTones} />);

    const titleElement = screen.getByText("Test Colors");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the table headers correctly", () => {
    render(<Color title="Test Colors" tones={mockTones} />);

    expect(screen.getByText("Key")).toBeInTheDocument();
    expect(screen.getByText("Hex")).toBeInTheDocument();
    expect(screen.getByText("RGB")).toBeInTheDocument();
    expect(screen.getByText("CSS Variable")).toBeInTheDocument();
  });

  it("renders the table rows with correct data", () => {
    render(<Color title="Test Colors" tones={mockTones} />);

    mockTones.forEach((tone) => {
      expect(screen.getByText(tone.key)).toBeInTheDocument();
      expect(screen.getByText(tone.hex)).toBeInTheDocument();
      expect(screen.getByText(tone.rgb)).toBeInTheDocument();
      expect(screen.getByText(tone.cssVar)).toBeInTheDocument();
    });
  });

  it("renders color preview boxes with correct background color", () => {
    render(<Color title="Test Colors" tones={mockTones} />);

    const previewElements = screen.getAllByRole("presentation");

    expect(previewElements[0]).toHaveStyle(
      `background-color: var(--color-primary);`,
    );
    expect(previewElements[1]).toHaveStyle(
      `background-color: var(--color-secondary);`,
    );
  });
});
