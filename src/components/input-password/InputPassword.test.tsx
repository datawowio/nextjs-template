import { fireEvent, render, screen } from "@testing-library/react";
import InputPassword from "./InputPassword";

describe("InputPassword Component", () => {
  it("renders correctly with default props", () => {
    render(<InputPassword />);

    const inputElement = screen.getByLabelText("Password");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "password");

    const toggleButton = screen.getByLabelText("toggle password visibility");
    expect(toggleButton).toBeInTheDocument();
  });

  it("toggles password visibility when clicking the visibility icon", () => {
    render(<InputPassword />);

    const inputElement = screen.getByLabelText("Password");
    expect(inputElement).toHaveAttribute("type", "password");

    const toggleButton = screen.getByLabelText("toggle password visibility");

    fireEvent.click(toggleButton);
    expect(inputElement).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("displays the error message when error is true", () => {
    render(
      <InputPassword
        formControlProps={{ error: true }}
        errorMessage="Password is invalid"
      />,
    );

    const errorMessage = screen.getByText("Password is invalid");
    expect(errorMessage).toBeInTheDocument();

    const formControl = screen.getByTestId("input-password");
    expect(formControl).toHaveClass("MuiFormControl-root");
    expect(formControl.children[1]).toHaveClass("Mui-error");
  });

  // When testing with event.preventDefault()
  // Ref: https://stackoverflow.com/questions/60455119/react-jest-test-preventdefault-action
  it("calls handleMouseDown and prevents default behavior when mouse is pressed on visibility toggle button", () => {
    render(<InputPassword />);

    const toggleButton = screen.getByLabelText("toggle password visibility");
    const isPrevented = fireEvent.mouseDown(toggleButton);

    expect(isPrevented).toBe(false);
  });
});
