import { render, screen, fireEvent, within } from "@testing-library/react";
import Filters from "./Filters";
import { NextIntlClientProvider } from "next-intl";

// Mock functions for event handlers
const onChangeInput = jest.fn();
const onChangeSelectStatus = jest.fn();
const onChangeSelectPagination = jest.fn();

// Mock messages for the component
const mockMessages = {
  search: "Search",
  status: "Status",
  show: "Show",
  perPage: "Per Page",
};

// Mock translations for the status filter
const mockTranslations = {
  "common.statusFilter.active": "Active",
  "common.statusFilter.inactive": "Inactive",
};

// Helper function to wrap components with the NextIntlClientProvider
const renderWithIntl = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="en" messages={mockTranslations}>
      {ui}
    </NextIntlClientProvider>,
  );
};

describe("Filters Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Filters component with correct labels and placeholders", () => {
    renderWithIntl(
      <Filters
        onChangeInput={onChangeInput}
        onChangeSelectStatus={onChangeSelectStatus}
        onChangeSelectPagination={onChangeSelectPagination}
        messages={mockMessages}
      />,
    );

    // Check that the input field has the correct label
    expect(screen.getByLabelText(mockMessages.search)).toBeInTheDocument();

    // Check that the status select dropdown has the correct label
    expect(screen.getByLabelText(mockMessages.status)).toBeInTheDocument();

    // Check that the show select dropdown has the correct label
    expect(screen.getByLabelText(mockMessages.show)).toBeInTheDocument();

    // Check that the perPage label is rendered
    expect(screen.getByText(mockMessages.perPage)).toBeInTheDocument();
  });

  test("calls onChangeInput when input changes", () => {
    renderWithIntl(
      <Filters
        onChangeInput={onChangeInput}
        onChangeSelectStatus={onChangeSelectStatus}
        onChangeSelectPagination={onChangeSelectPagination}
        messages={mockMessages}
      />,
    );

    const inputElement = screen.getByLabelText(mockMessages.search);

    // Simulate typing in the input field
    fireEvent.change(inputElement, { target: { value: "Test" } });

    // Ensure the handler was called with the correct value
    expect(onChangeInput).toHaveBeenCalledTimes(1);

    // Check that the event passed contains the correct target value
    expect(onChangeInput.mock.calls[0][0].target.value).toBe("Test");
  });

  test("calls onChangeSelectStatus when status select changes", async () => {
    const onChangeSelectStatus = jest.fn();

    // Render the component with the internationalization (renderWithIntl) helper
    renderWithIntl(
      <Filters
        onChangeInput={jest.fn()}
        onChangeSelectStatus={onChangeSelectStatus}
        onChangeSelectPagination={jest.fn()}
        messages={mockMessages}
      />,
    );

    // Find the autocomplete by test ID
    const autocomplete = screen.getByTestId("select-status");

    // Find the textbox within the autocomplete (role="textbox")
    const input = within(autocomplete).getByRole("combobox");

    // Focus on the autocomplete to simulate user interaction
    autocomplete.focus();

    // Simulate typing a value into the input (in this case, 'a')
    fireEvent.change(input, { target: { value: "a" } });

    // Simulate navigating options using keyboard (ArrowDown)
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });

    // Simulate pressing 'Enter' to select the highlighted option
    fireEvent.keyDown(autocomplete, { key: "Enter" });

    // Assert that the onChangeSelectStatus function is called
    expect(onChangeSelectStatus).toHaveBeenCalledTimes(1);
  });

  test("calls onChangeSelectPagination when pagination select changes", () => {
    renderWithIntl(
      <Filters
        onChangeInput={onChangeInput}
        onChangeSelectStatus={onChangeSelectStatus}
        onChangeSelectPagination={onChangeSelectPagination}
        messages={mockMessages}
      />,
    );

    // Find the autocomplete by test ID
    const autocomplete = screen.getByTestId("select-limit");

    // Find the textbox within the autocomplete (role="textbox")
    const input = within(autocomplete).getByRole("combobox");

    // Focus on the autocomplete to simulate user interaction
    autocomplete.focus();

    // Simulate typing a value into the input (in this case, 'a')
    fireEvent.change(input, { target: { value: "a" } });

    // Simulate navigating options using keyboard (ArrowDown)
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });

    // Simulate pressing 'Enter' to select the highlighted option
    fireEvent.keyDown(autocomplete, { key: "Enter" });

    // Ensure the handler was called
    expect(onChangeSelectPagination).toHaveBeenCalledTimes(1);
  });
});
