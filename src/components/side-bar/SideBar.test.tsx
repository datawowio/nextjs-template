import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

const mockChildren = <div data-testid="children">SideBar Content</div>;

describe("SideBar Component", () => {
  it("renders the Drawer with children", () => {
    render(
      <SideBar open={true} drawerWidth={240}>
        {mockChildren}
      </SideBar>,
    );

    expect(screen.getByTestId("children")).toBeInTheDocument();
  });

  it("applies the correct drawerWidth", () => {
    const drawerWidth = 300;
    render(
      <SideBar open={true} drawerWidth={drawerWidth}>
        {mockChildren}
      </SideBar>,
    );

    const drawer = document.querySelector(".MuiDrawer-root");
    expect(drawer).toHaveStyle(`width: ${drawerWidth}px`);
  });

  it("defaults the drawerWidth to 240 if NOT provided", () => {
    render(<SideBar open={true}>{mockChildren}</SideBar>);

    const drawer = document.querySelector(".MuiDrawer-root");
    expect(drawer).toHaveStyle("width: 240px");
  });

  it("does NOT open when the open prop is false", () => {
    render(<SideBar open={false}>{mockChildren}</SideBar>);

    const drawerPaper = document.querySelector(".MuiDrawer-paper");
    expect(drawerPaper).toHaveStyle({
      visibility: "hidden",
    });
  });
});
