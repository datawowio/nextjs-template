import { fireEvent, render, screen } from "@testing-library/react";
import InputCheckbox from "./InputCheckbox";

describe("InputCheckbox Component", () => {
  it("renders correctly with default label", () => {
    render(<InputCheckbox />);

    const labelElement = screen.getByLabelText("Label");
    expect(labelElement).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("allows the checkbox to be toggled", () => {
    render(<InputCheckbox />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("renders with a custom label", () => {
    render(<InputCheckbox formControlLabelProps={{ label: "Custom Label" }} />);

    const labelElement = screen.getByLabelText("Custom Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("applies custom props to the checkbox", () => {
    render(<InputCheckbox checkboxProps={{ checked: true }} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("renders with a custom data-testid", () => {
    render(<InputCheckbox dataTestId="custom-checkbox" />);

    const checkboxWrapper = screen.getByTestId("custom-checkbox");
    expect(checkboxWrapper).toBeInTheDocument();
  });
});
