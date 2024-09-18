import { fireEvent, render, screen } from "@testing-library/react";
import DialogConfirmation from "./DialogConfirmation";

describe("DialogConfirmation Component", () => {
  const defaultProps = {
    cancelText: "Cancel",
    confirmText: "Confirm",
    description: "Test Description",
    onCancel: jest.fn(),
    onConfirm: jest.fn(),
    onClose: jest.fn(),
    open: true,
    title: "Test Dialog",
  };

  it("renders the dialog with correct title, description, and children", () => {
    render(
      <DialogConfirmation {...defaultProps}>
        <div data-testid="dialog-children">Test Children</div>
      </DialogConfirmation>,
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Dialog")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByTestId("dialog-children")).toBeInTheDocument();
  });

  it("calls onCancel when the cancel button is clicked", () => {
    render(<DialogConfirmation {...defaultProps} />);

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(defaultProps.onCancel).toHaveBeenCalled();
  });

  it("calls onConfirm when the confirm button is clicked", () => {
    render(<DialogConfirmation {...defaultProps} />);

    const confirmButton = screen.getByText("Confirm");
    fireEvent.click(confirmButton);

    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });

  it("calls onClose when the user click outside dialog", () => {
    render(<DialogConfirmation {...defaultProps} />);

    fireEvent.click(document.querySelector(".MuiBackdrop-root")!);

    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("calls onClose when the Escape key is pressed", () => {
    render(<DialogConfirmation {...defaultProps} />);

    fireEvent.keyDown(document.querySelector(".dialog-confirmation")!, {
      key: "Escape",
      code: "Escape",
    });

    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("does NOT render the dialog when open is false", () => {
    render(
      <DialogConfirmation {...defaultProps} open={false}>
        <div data-testid="dialog-children">Test Children</div>
      </DialogConfirmation>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
