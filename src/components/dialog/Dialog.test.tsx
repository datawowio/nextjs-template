import { render, screen } from "@testing-library/react";
import Dialog from "./Dialog";

describe("Dialog Component", () => {
  it("renders the Dialog when open is `true`", () => {
    render(
      <Dialog open={true}>
        <div data-testid="dialog-children">Dialog Content</div>
      </Dialog>,
    );

    expect(screen.getByTestId("dialog-children")).toBeInTheDocument();
  });

  it("does NOT render the Dialog when open is `false`", () => {
    render(
      <Dialog open={false}>
        <div data-testid="dialog-children">Dialog Content</div>
      </Dialog>,
    );

    expect(screen.queryByTestId("dialog-children")).not.toBeInTheDocument();
  });

  it("has the correct aria attributes", () => {
    render(
      <Dialog open={true}>
        <div data-testid="dialog-children">Dialog Content</div>
      </Dialog>,
    );

    const dialog = screen.getByRole("dialog");

    expect(dialog).toHaveAttribute(
      "aria-describedby",
      "dialog-dialog-description",
    );
    expect(dialog).toHaveAttribute("aria-labelledby", "dialog-dialog-title");
  });
});
