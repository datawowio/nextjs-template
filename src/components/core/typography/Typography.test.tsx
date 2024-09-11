import { render, screen } from "@testing-library/react";

import Typography from "./Typography";
import { getCustomVariantProps } from "./helpers";

jest.mock("./helpers", () => ({
  getCustomVariantProps: jest.fn(),
}));

describe("Typography Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with default customVariant and default component", () => {
    const component = "p";
    const sx = {
      fontSize: "1rem",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.5rem",
    };

    (getCustomVariantProps as jest.Mock).mockReturnValue({ component, sx });
    render(<Typography>Test Text</Typography>);

    const typographyElement = screen.getByText("Test Text");

    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe(component);
    expect(typographyElement).toHaveStyle(sx);
  });

  it("renders with custom component and sx", () => {
    const component = "p";
    const sx = {
      fontSize: "1rem",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.5rem",
    };

    (getCustomVariantProps as jest.Mock).mockReturnValue({ component, sx });
    render(
      <Typography component="h1" sx={{ color: "green" }}>
        Test Text
      </Typography>,
    );

    const typographyElement = screen.getByText("Test Text");

    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe("h1");
    expect(typographyElement).toHaveStyle({ ...sx, color: "green" });
  });

  it("uses default span component if no component or customVariant component is provided", () => {
    const component = null;
    const sx = {
      fontSize: "1rem",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.5rem",
    };

    (getCustomVariantProps as jest.Mock).mockReturnValue({ component, sx });
    render(<Typography>Test Text</Typography>);

    const typographyElement = screen.getByText("Test Text");

    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe("span");
    expect(typographyElement).toHaveStyle(sx);
  });

  it("renders with a different customVariant", () => {
    const component = "span";
    const sx = {
      fontSize: "1.75rem",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "2.625rem",
    };

    (getCustomVariantProps as jest.Mock).mockReturnValue({ component, sx });
    render(<Typography customVariant="boldHeadingLG">Test Text</Typography>);

    const typographyElement = screen.getByText("Test Text");

    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement.tagName.toLowerCase()).toBe(component);
    expect(typographyElement).toHaveStyle(sx);
  });
});
