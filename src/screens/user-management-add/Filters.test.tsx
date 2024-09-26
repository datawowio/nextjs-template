import { render, screen, fireEvent, within } from "@testing-library/react";
import Filters from "./Filters";
import { NextIntlClientProvider } from "next-intl";

const onChangeInput = jest.fn();
const onChangeSelectPagination = jest.fn();

const mockMessages = {
  search: "Search",
  show: "Show",
  perPage: "Per Page",
};

const renderWithIntl = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="en">{ui}</NextIntlClientProvider>,
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
        onChangeSelectPagination={onChangeSelectPagination}
        messages={mockMessages}
      />,
    );

    expect(screen.getByLabelText(mockMessages.search)).toBeInTheDocument();

    expect(screen.getByLabelText(mockMessages.show)).toBeInTheDocument();

    expect(screen.getByText(mockMessages.perPage)).toBeInTheDocument();
  });

  test("calls onChangeInput when input changes", () => {
    renderWithIntl(
      <Filters
        onChangeInput={onChangeInput}
        onChangeSelectPagination={onChangeSelectPagination}
        messages={mockMessages}
      />,
    );

    const inputElement = screen.getByLabelText(mockMessages.search);

    fireEvent.change(inputElement, { target: { value: "Test" } });

    expect(onChangeInput).toHaveBeenCalledTimes(1);

    expect(onChangeInput.mock.calls[0][0].target.value).toBe("Test");
  });

  test("calls onChangeSelectPagination when pagination select changes", () => {
    renderWithIntl(
      <Filters
        onChangeInput={onChangeInput}
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
