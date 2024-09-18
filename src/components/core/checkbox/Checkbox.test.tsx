import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

jest.mock("./styles", () => ({
  BpCheckedIcon: () => <span data-testid="bp-checked-icon" />,
  BpIcon: () => <span data-testid="bp-icon" />,
  BpIndeterminateIcon: () => <span data-testid="bp-indeterminate-icon" />,
}));

describe("Checkbox Component", () => {
  it("renders the checkbox with a label", () => {
    render(<Checkbox label="Test Label" />);

    const checkbox = screen.getByRole("checkbox");

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });

  it("renders the checkbox as disabled when the disabled prop is passed", () => {
    render(<Checkbox label="Disabled Checkbox" disabled />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("renders the correct size class based on the size prop", () => {
    const { rerender } = render(
      <Checkbox label="Small Checkbox" size="small" />,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox?.parentElement?.parentElement).toHaveClass("small");

    rerender(<Checkbox label="Medium Checkbox" size="medium" />);
    expect(checkbox?.parentElement?.parentElement).toHaveClass("medium");

    rerender(<Checkbox label="Large Checkbox" size="large" />);
    expect(checkbox?.parentElement?.parentElement).toHaveClass("large");
  });

  it("renders the correct icons for checked state", () => {
    render(<Checkbox label="Test Checkbox" checked />);
    expect(screen.getByTestId("bp-checked-icon")).toBeInTheDocument();
  });

  it("renders the correct icon for unchecked state", () => {
    render(<Checkbox label="Test Checkbox" checked={false} />);
    expect(screen.getByTestId("bp-icon")).toBeInTheDocument();
  });

  it("renders the correct icon for indeterminate state", () => {
    render(<Checkbox label="Test Checkbox" indeterminate />);
    expect(screen.getByTestId("bp-indeterminate-icon")).toBeInTheDocument();
  });

  it("calls onChange when the checkbox is clicked", () => {
    const onChangeMock = jest.fn();
    render(<Checkbox label="Test Checkbox" onChange={onChangeMock} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
