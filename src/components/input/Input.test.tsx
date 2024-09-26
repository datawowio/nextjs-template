import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders with default outlined variant", () => {
    render(<Input label="Test Input" />);

    const inputElement = screen.getByLabelText("Test Input");
    expect(inputElement).toBeInTheDocument();

    const outlinedInput = inputElement.closest(".MuiOutlinedInput-root");
    expect(outlinedInput).toBeInTheDocument();
  });

  it("passes other props correctly", () => {
    render(<Input label="Test Input" disabled />);

    const inputElement = screen.getByLabelText("Test Input");
    expect(inputElement).toBeDisabled();
  });

  it("renders with custom props and keeps the variant as outlined", () => {
    render(<Input label="Test Input" size="small" />);

    const inputElement = screen.getByLabelText("Test Input");
    expect(inputElement).toBeInTheDocument();

    const outlinedInput = inputElement.closest(".MuiOutlinedInput-root");
    expect(outlinedInput).toBeInTheDocument();
    expect(outlinedInput).toHaveClass("MuiInputBase-sizeSmall");
  });
});
