import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./NavBar";

// Mock props
const mockHandleDrawerToggle = jest.fn();
const mockLogo = <div data-testid="logo">Logo</div>;
const mockProfile = <div data-testid="profile">Profile</div>;

describe("Navbar Component", () => {
  it("renders the AppBar, Toolbar, and IconButton", () => {
    render(
      <Navbar
        handleDrawerToggle={mockHandleDrawerToggle}
        logo={mockLogo}
        profile={mockProfile}
      />,
    );

    expect(
      screen.getByRole("button", { name: /open drawer/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("profile")).toBeInTheDocument();
  });

  it("calls handleDrawerToggle when the menu icon is clicked", () => {
    render(
      <Navbar
        handleDrawerToggle={mockHandleDrawerToggle}
        logo={mockLogo}
        profile={mockProfile}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /open drawer/i }));

    expect(mockHandleDrawerToggle).toHaveBeenCalledTimes(1);
  });

  it("should NOT render profile if profile prop is not provided", () => {
    render(
      <Navbar handleDrawerToggle={mockHandleDrawerToggle} logo={mockLogo} />,
    );

    expect(screen.queryByTestId("profile")).not.toBeInTheDocument();
  });
});
