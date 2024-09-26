import { fireEvent, render, screen } from "@testing-library/react";
import DialogConfirmationContent from "./DialogConfirmationContent";

describe("DialogConfirmationContent Component", () => {
  const defaultProps = {
    cancelText: "Cancel",
    confirmText: "Confirm",
    description: "Test Description",
    onCancel: jest.fn(),
    onConfirm: jest.fn(),
    title: "Test Title",
  };

  it("renders the title, description, and children", () => {
    render(
      <DialogConfirmationContent {...defaultProps}>
        <div data-testid="dialog-children">Test Children</div>
      </DialogConfirmationContent>,
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByTestId("dialog-children")).toBeInTheDocument();
  });

  it("calls onCancel when the cancel button is clicked", () => {
    render(<DialogConfirmationContent {...defaultProps} />);

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(defaultProps.onCancel).toHaveBeenCalled();
  });

  it("calls onConfirm when the confirm button is clicked", () => {
    render(<DialogConfirmationContent {...defaultProps} />);

    const confirmButton = screen.getByText("Confirm");
    fireEvent.click(confirmButton);

    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });

  it("renders the correct text on cancel and confirm buttons", () => {
    render(<DialogConfirmationContent {...defaultProps} />);

    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();

    const confirmButton = screen.getByText("Confirm");
    expect(confirmButton).toBeInTheDocument();
  });

  it("does NOT render title or description if they are not provided", () => {
    const { queryByText } = render(<DialogConfirmationContent />);

    expect(queryByText("Test Title")).not.toBeInTheDocument();
    expect(queryByText("Test Description")).not.toBeInTheDocument();
  });
});
