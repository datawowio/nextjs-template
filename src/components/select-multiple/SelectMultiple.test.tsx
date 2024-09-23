import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { dash } from "radash";

import SelectMultiple from "./SelectMultiple";

import type { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import type { AutocompleteProps } from "./types";

describe("SelectMultiple Component", () => {
  const options = [
    { label: "Placeholder 1", value: 1 },
    { label: "Placeholder 2", value: 2 },
    { label: "Placeholder 3", value: 3 },
    { label: "Placeholder 4", value: 4 },
  ];

  it("renders with default popupIcon (ExpandMore)", () => {
    render(<SelectMultiple label="Test Label" options={options} />);

    const expandMoreIcon = screen.getByTestId("ExpandMoreIcon");
    expect(expandMoreIcon).toBeInTheDocument();
  });

  it("renders with custom popupIcon", () => {
    const customIcon = <span data-testid="custom-icon">Custom Icon</span>;
    render(
      <SelectMultiple
        label="Test Label"
        options={options}
        popupIcon={customIcon}
      />,
    );

    const icon = screen.getByTestId("custom-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders Input component by default for renderInput", () => {
    render(<SelectMultiple label="Test Label" options={options} />);

    const inputField = screen.getByRole("combobox");
    expect(inputField).toBeInTheDocument();
  });

  it("renders custom renderInput", () => {
    const customRenderInput = (params: AutocompleteRenderInputParams) => (
      <TextField {...params} data-testid="custom-input" label="Custom Input" />
    );

    render(
      <SelectMultiple
        label="Test Label"
        options={options}
        renderInput={customRenderInput}
      />,
    );

    const customInput = screen.getByTestId("custom-input");
    expect(customInput).toBeInTheDocument();
  });

  it("renders Checkbox component by default for renderOptions", () => {
    render(<SelectMultiple open label="Test Label" options={options} />);

    const firstOption = screen.getByText("Placeholder 1");
    expect(firstOption).toBeInTheDocument();

    const checkbox = firstOption
      .closest("li")
      ?.querySelector("input[type=checkbox]");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders custom renderOptions", () => {
    const customRenderOption: AutocompleteProps["renderOption"] = (
      props,
      option,
      { selected },
    ) => {
      const { key, ...optionProps } = props;
      return (
        <li
          data-testid={dash(`custom-option-${option.label}`).toLowerCase()}
          key={key}
          {...optionProps}
        >
          {selected && <span data-testid="selected">Selected</span>}
          <span>{option.label}</span>
        </li>
      );
    };

    render(
      <SelectMultiple
        open
        label="Test Label"
        options={options}
        renderOption={customRenderOption}
      />,
    );

    const firstOption = screen.getByTestId("custom-option-placeholder-1");
    expect(firstOption).toBeInTheDocument();

    const secondOption = screen.getByTestId("custom-option-placeholder-2");
    expect(secondOption).toBeInTheDocument();

    const selectedIndicator = screen.queryByTestId("selected");
    expect(selectedIndicator).not.toBeInTheDocument();
  });

  it("renders Chip component by default for renderTags", () => {
    const selectedOptions = [
      { label: "Placeholder 1", value: 1 },
      { label: "Placeholder 2", value: 2 },
    ];

    render(
      <SelectMultiple
        isOptionEqualToValue={(option, value) => option.value === value.value}
        label="Test Label"
        options={options}
        value={selectedOptions}
      />,
    );

    const firstChip = screen.getByText("Placeholder 1");
    expect(firstChip).toBeInTheDocument();

    const secondChip = screen.getByText("Placeholder 2");
    expect(secondChip).toBeInTheDocument();
  });

  it("renders custom renderTags", () => {
    const selectedOptions = [
      { label: "Placeholder 1", value: 1 },
      { label: "Placeholder 2", value: 2 },
    ];

    const customRenderTags: AutocompleteProps["renderTags"] = (
      tagValue,
      getTagProps,
    ) =>
      tagValue.map((option, index) => {
        const { key, ...tagProps } = getTagProps({ index });
        return (
          <Chip
            {...tagProps}
            data-testid={`chip-${index}`}
            key={key}
            label={option.label}
            sx={{ backgroundColor: "red" }}
          />
        );
      });

    render(
      <SelectMultiple
        isOptionEqualToValue={(option, value) => option.value === value.value}
        label="Test Label"
        options={options}
        value={selectedOptions}
        renderTags={customRenderTags}
      />,
    );

    const firstChip = screen.getByTestId("chip-0");
    expect(firstChip).toBeInTheDocument();
    expect(firstChip).toHaveTextContent("Placeholder 1");
    expect(firstChip).toHaveStyle({ backgroundColor: "red" });

    const secondChip = screen.getByTestId("chip-1");
    expect(secondChip).toBeInTheDocument();
    expect(secondChip).toHaveTextContent("Placeholder 2");
    expect(secondChip).toHaveStyle({ backgroundColor: "red" });
  });

  it("calls onChange when a new option is selected", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <SelectMultiple
        label="Test Label"
        onChange={handleChange}
        options={options}
      />,
    );

    const inputField = screen.getByRole("combobox");
    await user.click(inputField);

    const firstOption = screen.getByText("Placeholder 1");
    await user.click(firstOption);

    expect(handleChange).toHaveBeenCalled();
  });
});
