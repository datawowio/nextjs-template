import { render, screen, fireEvent, within } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import Filters from "./Filters";

const onChangeInput = jest.fn();
const onChangeSelectStatus = jest.fn();
const onChangeSelectPagination = jest.fn();

const mockMessages = {
  search: "Search",
  status: "Status",
  show: "Show",
  perPage: "Per Page",
};

const mockTranslations = {
  "common.statusFilter.active": "Active",
  "common.statusFilter.inactive": "Inactive",
};

const renderWithIntl = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="en" messages={mockTranslations}>
      {ui}
    </NextIntlClientProvider>,
  );
};

describe("Filters Component", () => {
  afterEach(() => {
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

    expect(screen.getByLabelText(mockMessages.search)).toBeInTheDocument();

    expect(screen.getByLabelText(mockMessages.status)).toBeInTheDocument();

    expect(screen.getByLabelText(mockMessages.show)).toBeInTheDocument();

    expect(screen.getByText(mockMessages.perPage)).toBeInTheDocument();
  });

  it("calls onChangeInput when input changes", () => {
    renderWithIntl(
      <Filters
        onChangeInput={onChangeInput}
        onChangeSelectStatus={onChangeSelectStatus}
        onChangeSelectPagination={onChangeSelectPagination}
        messages={mockMessages}
      />,
    );

    const inputElement = screen.getByLabelText(mockMessages.search);

    fireEvent.change(inputElement, { target: { value: "Test" } });

    expect(onChangeInput).toHaveBeenCalledTimes(1);

    expect(onChangeInput.mock.calls[0][0].target.value).toBe("Test");
  });

  it("calls onChangeSelectStatus when status select changes", () => {
    const onChangeSelectStatus = jest.fn();

    renderWithIntl(
      <Filters
        onChangeInput={jest.fn()}
        onChangeSelectStatus={onChangeSelectStatus}
        onChangeSelectPagination={jest.fn()}
        messages={mockMessages}
      />,
    );

    const autocomplete = screen.getByTestId("select-status");

    const input = within(autocomplete).getByRole("combobox");

    autocomplete.focus();

    fireEvent.change(input, { target: { value: "a" } });

    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });

    fireEvent.keyDown(autocomplete, { key: "Enter" });

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

    const autocomplete = screen.getByTestId("select-limit");

    const input = within(autocomplete).getByRole("combobox");

    autocomplete.focus();

    fireEvent.change(input, { target: { value: "a" } });

    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });

    fireEvent.keyDown(autocomplete, { key: "Enter" });

    expect(onChangeSelectPagination).toHaveBeenCalledTimes(1);
  });
});
