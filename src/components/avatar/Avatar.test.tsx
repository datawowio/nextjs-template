import { render, screen } from "@testing-library/react";

// Don't remove it; use it for the mock image below
import fallbackAvatar from "@/assets/images/avatar/fallback-avatar.png";

import Avatar from "./Avatar";
import { customSizeStyle } from "./styles";

// Mock the fallback avatar image
jest.mock("@/assets/images/avatar/fallback-avatar.png", () => ({
  src: "fallback-avatar.png",
}));

describe("Avatar Component", () => {
  it("renders with fallback avatar when no src is provided", () => {
    render(<Avatar alt="fallback avatar" data-testid="avatar" />);

    const avatarImg = screen.getByAltText("fallback avatar");

    expect(avatarImg).toHaveAttribute("src", "fallback-avatar.png");
  });

  it("renders with a custom src when provided", () => {
    const customSrc = "custom-avatar.png";
    render(<Avatar src={customSrc} alt="custom avatar" data-testid="avatar" />);

    const avatarImg = screen.getByAltText("custom avatar");

    expect(avatarImg).toHaveAttribute("src", customSrc);
  });

  it("applies the correct custom size styles based on the size prop", () => {
    render(<Avatar size="lg" data-testid="avatar" />);

    const avatar = screen.getByTestId("avatar");

    expect(avatar).toHaveStyle({
      width: customSizeStyle["lg"].width + "px",
      height: customSizeStyle["lg"].height + "px",
    });
  });

  it("applies additional custom styles via the sx prop", () => {
    render(<Avatar sx={{ backgroundColor: "red" }} data-testid="avatar" />);

    const avatar = screen.getByTestId("avatar");

    expect(avatar).toHaveStyle({ backgroundColor: "red" });
  });

  it("renders with the correct alt text", () => {
    render(<Avatar alt="custom alt text" data-testid="avatar" />);

    const avatarImg = screen.getByAltText("custom alt text");

    expect(avatarImg).toBeInTheDocument();
  });
});
