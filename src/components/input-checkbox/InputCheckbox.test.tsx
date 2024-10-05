import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/test-helpers";
import InputCheckbox from "./InputCheckbox";

describe("InputCheckbox Component", () => {
  it("renders correctly with default label", () => {
    renderWithProviders(<InputCheckbox />);

    const labelElement = screen.getByLabelText("Label");
    expect(labelElement).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("allows the checkbox to be toggled", () => {
    renderWithProviders(<InputCheckbox />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("renders with a custom label", () => {
    renderWithProviders(
      <InputCheckbox formControlLabelProps={{ label: "Custom Label" }} />,
    );

    const labelElement = screen.getByLabelText("Custom Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("applies custom props to the checkbox", () => {
    renderWithProviders(<InputCheckbox checkboxProps={{ checked: true }} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("renders with a custom data-testid", () => {
    renderWithProviders(<InputCheckbox dataTestId="custom-checkbox" />);

    const checkboxWrapper = screen.getByTestId("custom-checkbox");
    expect(checkboxWrapper).toBeInTheDocument();
  });
});
