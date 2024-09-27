import { render, screen, fireEvent } from "@testing-library/react";
import UserManagementScreen from "./UsersScreen";
import { NextIntlClientProvider } from "next-intl";
import type { ChangeEvent } from "react";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => key),
}));

jest.mock("@/components/table-data", () => {
  return function MockTableData(props: {
    data: any;
    onSortColumn: (key: string, orderBy: string) => void;
  }) {
    return (
      <div data-testid="table-data">
        <button
          data-testid="sort-button"
          onClick={() => props.onSortColumn("name", "asc")}
        >
          Sort by Name Ascending
        </button>
        Table Data
      </div>
    );
  };
});

jest.mock("@/components/pagination", () => {
  return function MockPagination(props: {
    count: number;
    page: number;
    limit: number;
    totalItems: number;
    messages: any;
    onChange: (e: React.ChangeEvent<unknown>, page: number) => void;
    sx?: any;
  }) {
    return (
      <div data-testid="pagination">
        Pagination - Page: {props.page}, Limit: {props.limit}
      </div>
    );
  };
});

jest.mock("./Filters", () => {
  return function MockFilters({
    onChangeInput,
    onChangeSelectStatus,
    onChangeSelectPagination,
  }: {
    onChangeInput: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    onChangeSelectStatus: (event: React.SyntheticEvent, options: any) => void;
    onChangeSelectPagination: (
      event: React.SyntheticEvent,
      options: any,
    ) => void;
  }) {
    return (
      <div>
        <input
          data-testid="filter-input"
          onChange={(event) => onChangeInput(event)}
        />
        <button
          data-testid="filter-status-button"
          onClick={(_event) =>
            onChangeSelectStatus(_event, { value: "Active" })
          }
        >
          Set Status to Active
        </button>
        <button
          data-testid="filter-pagination-button"
          onClick={(_event) => onChangeSelectPagination(_event, { value: 10 })}
        >
          Set Pagination to 10
        </button>
      </div>
    );
  };
});

const renderWithIntl = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="en">{ui}</NextIntlClientProvider>,
  );
};

describe("UserManagementScreen", () => {
  xit("renders the header and button", () => {
    const { container } = render(<UserManagementScreen />);
    expect(
      container.children[0].querySelector(".MuiTypography-root"),
    ).toBeInTheDocument();
    expect(
      container.children[0].querySelector(".MuiButton-root"),
    ).toBeInTheDocument();
  });

  xit("renders table data and pagination", () => {
    renderWithIntl(<UserManagementScreen />);
    expect(screen.getByTestId("table-data")).toBeInTheDocument();
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  xit("calls onChangeInput when typing in the filter input", () => {
    renderWithIntl(<UserManagementScreen />);
    const input = screen.getByTestId("filter-input");
    fireEvent.change(input, { target: { value: "John" } });

    expect(input).toHaveValue("John");
    // You would want to assert the state or effects of this change
    // For example, check that a debounced filter update occurs (if applicable)
  });

  xit("calls onChangeSelectStatus when status is set to Active", () => {
    renderWithIntl(<UserManagementScreen />);
    const button = screen.getByTestId("filter-status-button");
    fireEvent.click(button);

    // Verify that the correct action is dispatched or any effect occurs
  });

  xit("calls onChangeSelectPagination when pagination is changed", () => {
    renderWithIntl(<UserManagementScreen />);
    const button = screen.getByTestId("filter-pagination-button");
    fireEvent.click(button);

    // Verify that the correct pagination change occurs
  });

  xit("calls handleSortColumn when sorting by name", () => {
    renderWithIntl(<UserManagementScreen />);
    const sortButton = screen.getByTestId("sort-button");
    fireEvent.click(sortButton);

    // Verify that the correct sort action is dispatched
    // You may want to spy on the dispatch function or check state changes
  });

  xit("calls handleChangePagination when pagination button is clicked", () => {
    render(<UserManagementScreen />);
    const paginationButton = screen.getByTestId("pagination");
    fireEvent.click(paginationButton);

    // Verify that the correct pagination action is dispatched
    // You may want to spy on the dispatch function or check state changes
  });
});
