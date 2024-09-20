import React from "react";
import { render, screen } from "@testing-library/react";

import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";
import rem from "@/utils/rem";

import LayoutMainDefault from "./LayoutMainDefault";

jest.mock("@/components/nav-bar", () =>
  jest.fn(() => <div data-testid="navbar">NavBar</div>),
);
jest.mock("@/components/side-bar", () =>
  jest.fn(() => <div data-testid="sidebar">SideBar</div>),
);

describe("LayoutMainDefault Component", () => {
  const mockNavBarProps = {
    logo: <div>Logo</div>,
    profile: <div>Profile</div>,
  };
  const mockSideBarProps = {
    children: <div>SideBar Content</div>,
  };
  const mockChildren = <div>Main Content</div>;
  const mockHandleDrawerToggle = jest.fn();

  it("renders the NavBar, SideBar, and children correctly", () => {
    render(
      <LayoutMainDefault
        drawerWidth={240}
        handleDrawerToggle={mockHandleDrawerToggle}
        navBarProps={mockNavBarProps}
        sideBarProps={mockSideBarProps}
        open={true}
      >
        {mockChildren}
      </LayoutMainDefault>,
    );

    // Check if NavBar is rendered
    expect(screen.getByTestId("navbar")).toBeInTheDocument();

    // Check if SideBar is rendered
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    // Check if Main content is rendered
    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });

  it("passes the correct props to NavBar and SideBar", () => {
    render(
      <LayoutMainDefault
        drawerWidth={240}
        handleDrawerToggle={mockHandleDrawerToggle}
        navBarProps={mockNavBarProps}
        sideBarProps={mockSideBarProps}
        open={true}
      >
        {mockChildren}
      </LayoutMainDefault>,
    );

    expect(NavBar).toHaveBeenCalledWith(
      expect.objectContaining({
        logo: mockNavBarProps.logo,
        profile: mockNavBarProps.profile,
        handleDrawerToggle: mockHandleDrawerToggle,
      }),
      {},
    );

    expect(SideBar).toHaveBeenCalledWith(
      expect.objectContaining({
        children: mockSideBarProps.children,
        open: true,
      }),
      {},
    );
  });

  it("applies the correct drawerWidth and open state to the Main component", () => {
    const { container } = render(
      <LayoutMainDefault
        drawerWidth={300}
        handleDrawerToggle={mockHandleDrawerToggle}
        navBarProps={mockNavBarProps}
        sideBarProps={mockSideBarProps}
        open={false}
      >
        {mockChildren}
      </LayoutMainDefault>,
    );

    // Check if the Main component applies the correct styles
    const main = container.querySelector("main");
    expect(main).toHaveStyle(`margin-left: ${rem(-300)}}`);
  });

  it("updates the Main component margin when open is true", () => {
    const { container } = render(
      <LayoutMainDefault
        drawerWidth={240}
        handleDrawerToggle={mockHandleDrawerToggle}
        navBarProps={mockNavBarProps}
        sideBarProps={mockSideBarProps}
        open={true}
      >
        {mockChildren}
      </LayoutMainDefault>,
    );

    // Check if the Main component margin is updated when open
    const main = container.querySelector("main");
    expect(main).toHaveStyle("margin-left: 0");
  });
});
