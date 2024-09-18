import TextField from "@mui/material/TextField";
import { render, screen } from "@testing-library/react";

import Select from "./Select";

import type { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";

describe("Select Component", () => {
  it("renders with default popupIcon (ExpandMore)", () => {
    render(<Select label="Test Label" options={[]} />);

    const expandMoreIcon = screen.getByTestId("ExpandMoreIcon");
    expect(expandMoreIcon).toBeInTheDocument();
  });

  it("renders with a custom popupIcon", () => {
    const customIcon = <span data-testid="custom-icon">Custom Icon</span>;
    render(<Select label="Test Label" options={[]} popupIcon={customIcon} />);

    const icon = screen.getByTestId("custom-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders Input component by default for renderInput", () => {
    render(<Select label="Test Label" options={[]} />);

    const inputField = screen.getByRole("combobox");
    expect(inputField).toBeInTheDocument();
  });

  it("renders a custom renderInput", () => {
    const customRenderInput = (params: AutocompleteRenderInputParams) => (
      <TextField {...params} data-testid="custom-input" label="Custom Input" />
    );

    render(
      <Select
        label="Test Label"
        options={[]}
        renderInput={customRenderInput}
      />,
    );

    const customInput = screen.getByTestId("custom-input");
    expect(customInput).toBeInTheDocument();
  });

  it("renders with multiple selection enabled when `multiple` prop is true", () => {
    const options = [
      { label: "Placeholder 1", value: 1 },
      { label: "Placeholder 2", value: 2 },
      { label: "Placeholder 3", value: 3 },
      { label: "Placeholder 4", value: 4 },
    ];

    render(
      <Select
        defaultValue={[options[0], options[1]]}
        isOptionEqualToValue={(option, value) => {
          return option.value === value.value;
        }}
        label="Test Label"
        multiple={true}
        options={options}
      />,
    );

    const selectedOption1 = screen.getByText("Placeholder 1");
    expect(selectedOption1).toBeInTheDocument();
    expect(selectedOption1).toHaveClass("MuiChip-label");

    const selectedOption2 = screen.getByText("Placeholder 2");
    expect(selectedOption2).toBeInTheDocument();
    expect(selectedOption2).toHaveClass("MuiChip-label");
  });
});
