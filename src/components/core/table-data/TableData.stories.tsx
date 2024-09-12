import TableData from "./TableData";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableData> = {
  component: TableData,
  title: "Core/TableData",
};

export default meta;

type Story = StoryObj<typeof TableData>;

export const Default: Story = {
  args: {
    data: {
      headers: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "status", label: "Status" },
      ],
      rows: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          status: (
            <span
              style={{
                display: "inline-block",
                padding: "0.5rem",
                backgroundColor: "aliceblue",
              }}
            >
              Active
            </span>
          ),
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "jane@example.com",
          status: (
            <span
              style={{
                display: "inline-block",
                padding: "0.5rem",
                backgroundColor: "aliceblue",
              }}
            >
              Inactive
            </span>
          ),
        },
      ],
    },
    sortColumn: "name",
    orderBy: "asc",
    onRequestSort(_, columnName) {
      console.log(columnName);
    },
  },
};
