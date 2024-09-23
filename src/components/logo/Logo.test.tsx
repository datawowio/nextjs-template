import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

import type { LogoProps } from "./types";

describe("Logo Component", () => {
  const logoProps: LogoProps = {
    alt: "Test Logo",
    dataTestId: "next-image",
    height: 50,
    src: "/test-logo.png",
    width: 100,
  };

  it("renders the Image component with correct props", () => {
    render(<Logo {...logoProps} />);

    const image = screen.getByTestId("next-image");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", logoProps.alt);
    expect(image).toHaveAttribute(
      "src",
      expect.stringMatching(/test-logo\.png/),
    );
  });

  it("applies the correct width and height to the Box component", () => {
    const { container } = render(<Logo {...logoProps} />);

    const box = container.firstChild;

    expect(box).toHaveStyle("position: relative");
    expect(box).toHaveStyle(`width: ${logoProps.width}px`);
    expect(box).toHaveStyle(`height: ${logoProps.height}px`);
  });
});
