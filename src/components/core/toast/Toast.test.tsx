import { render, screen, fireEvent } from "@testing-library/react";
import Toast from "./Toast";

jest.mock("@mui/icons-material/CheckCircleOutline", () => () => (
  <svg data-testid="success-icon" />
));

jest.mock("@mui/icons-material/Warning", () => () => (
  <svg data-testid="warning-icon" />
));

jest.mock("@mui/icons-material/InfoOutlined", () => () => (
  <svg data-testid="info-icon" />
));

describe("Toast Component", () => {
  const defaultProps = {
    message: "This is a test message",
    onClose: jest.fn(),
    open: true,
  };

  it("renders message", () => {
    render(<Toast {...defaultProps} />);

    const toast = screen.getByRole("presentation");
    expect(toast).toHaveTextContent("This is a test message");
  });

  it("renders the Snackbar with the default anchorOrigin", () => {
    render(<Toast {...defaultProps} />);

    const toast = screen.getByRole("presentation");

    expect(toast).toBeInTheDocument();
    expect(toast).toHaveClass("MuiSnackbar-anchorOriginTopRight");
  });

  it("renders the Snackbar with the custom anchorOrigin", () => {
    render(
      <Toast
        {...defaultProps}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />,
    );

    const toast = screen.getByRole("presentation");

    expect(toast).toBeInTheDocument();
    expect(toast).toHaveClass("MuiSnackbar-anchorOriginBottomLeft");
  });

  it("renders success icon when status is success", () => {
    render(<Toast {...defaultProps} status="success" />);

    const successIcon = screen.getByTestId("success-icon");
    expect(successIcon).toBeInTheDocument();
  });

  it("renders error icon when status is error", () => {
    render(<Toast {...defaultProps} status="error" />);

    const warningIcon = screen.getByTestId("warning-icon");
    expect(warningIcon).toBeInTheDocument();
  });

  it("renders info icon when status is info", () => {
    render(<Toast {...defaultProps} status="info" />);

    const infoIcon = screen.getByTestId("info-icon");
    expect(infoIcon).toBeInTheDocument();
  });

  it("calls onClose when the Snackbar is closed", () => {
    render(<Toast {...defaultProps} status="success" />);

    const closeButton = screen.getByTitle("Close");
    fireEvent.click(closeButton);

    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
