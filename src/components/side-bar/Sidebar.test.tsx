import { render, screen } from "@testing-library/react";
import Sidebar from "./SideBar";

const mockChildren = <div data-testid="children">Sidebar Content</div>;

describe("Sidebar Component", () => {
  it("renders the Drawer with children", () => {
    render(
      <Sidebar open={true} drawerWidth={240}>
        {mockChildren}
      </Sidebar>,
    );

    expect(screen.getByTestId("children")).toBeInTheDocument();
  });

  it("applies the correct drawerWidth", () => {
    const drawerWidth = 300;
    render(
      <Sidebar open={true} drawerWidth={drawerWidth}>
        {mockChildren}
      </Sidebar>,
    );

    const drawer = document.querySelector(".MuiDrawer-root");
    expect(drawer).toHaveStyle(`width: ${drawerWidth}px`);
  });

  it("defaults to the drawerWidth of 240 if not provided", () => {
    render(<Sidebar open={true}>{mockChildren}</Sidebar>);

    const drawer = document.querySelector(".MuiDrawer-root");
    expect(drawer).toHaveStyle("width: 240px");
  });

  it("does NOT open when the open prop is false", () => {
    render(<Sidebar open={false}>{mockChildren}</Sidebar>);

    const drawerPaper = document.querySelector(".MuiDrawer-paper");
    expect(drawerPaper).toHaveStyle({
      visibility: "hidden",
    });
  });
});
