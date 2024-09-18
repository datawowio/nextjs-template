import { render, screen, fireEvent } from "@testing-library/react";
import TableData from "./TableData";

const data = {
  headers: [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
  ],
  rows: [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Doe", email: "jane@example.com", status: "Inactive" },
  ],
};

describe("TableData Component", () => {
  it("renders table with headers and rows", () => {
    render(
      <TableData
        data={data}
        orderBy="asc"
        onSortColumn={() => {}}
        sortColumn="name"
      />,
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("jane@example.com")).toBeInTheDocument();
    expect(screen.getByText("Inactive")).toBeInTheDocument();
  });

  it("calls onSortColumn when a column header is clicked", () => {
    const onSortColumnMock = jest.fn();

    render(
      <TableData
        data={data}
        onSortColumn={onSortColumnMock}
        orderBy="asc"
        sortColumn="name"
      />,
    );

    const nameHeader = screen.getByText("Name");

    fireEvent.click(nameHeader);
    expect(onSortColumnMock).toHaveBeenCalledWith("name", "desc");
  });

  it("does NOT display hidden headers", () => {
    const dataWithHiddenHeaders = {
      ...data,
      headers: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email", hidden: true },
        { key: "status", label: "Status" },
      ],
    };

    render(
      <TableData
        data={dataWithHiddenHeaders}
        orderBy="asc"
        sortColumn="name"
        onSortColumn={() => {}}
      />,
    );

    expect(screen.queryByText("Email")).not.toBeInTheDocument();
  });
});
