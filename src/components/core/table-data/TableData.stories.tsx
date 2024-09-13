import { faker } from "@faker-js/faker";
import { useArgs } from "@storybook/preview-api";
import {
  alphabetical,
  capitalize,
  draw,
  get,
  isNumber,
  keys,
  sort,
  range,
} from "radash";

import { colors } from "@/config/palette";
import TableData from "./TableData";

import type { Meta, StoryObj } from "@storybook/react";
import type {
  DataSource,
  OrderType,
  TableDataHeader,
  TableDataRow,
} from "./types";

const meta: Meta<typeof TableData> = {
  component: TableData,
  title: "Core/TableData",
};

export default meta;

type Story = StoryObj<typeof TableData>;

const users = generateUserData();
const data = generateDataTable(users, "id", "asc");

export const Default: Story = {
  args: {
    data,
    orderBy: "asc",
    sortColumn: "id",
  },
  render: function render(args) {
    // Hook
    const [{ data, orderBy, sortColumn }, updateArgs] = useArgs();

    // Event handler
    function handleRequestSort(columnName: string) {
      if (columnName === sortColumn) {
        const newOrderBy = orderBy === "asc" ? "desc" : "asc";
        const newData = generateDataTable(users, columnName, newOrderBy);

        updateArgs({ data: newData, orderBy: newOrderBy });
      } else {
        const newData = generateDataTable(users, columnName, "asc");
        updateArgs({ data: newData, sortColumn: columnName, orderBy: "asc" });
      }
    }

    return (
      <TableData
        {...args}
        data={data}
        orderBy={orderBy}
        sortColumn={sortColumn}
        onClickSortColumn={handleRequestSort}
      />
    );
  },
};

/*
 * =============================== View Helpers ===============================
 */
interface User {
  id: number;
  name: string;
  email: string;
  sex: string;
  gender: string;
  status: "active" | "inactive";
}

function generateUserData(): User[] {
  return Array.from(range(1, 100)).map((number) => {
    return {
      id: number,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      sex: faker.person.sex(),
      gender: faker.person.gender(),
      status: draw(["active", "inactive"])!,
    };
  });
}

function generateDataTable(
  users: User[],
  sortColumn: string,
  orderBy: OrderType,
): DataSource {
  if (users.length === 0) {
    return {
      headers: [],
      rows: [],
    };
  }

  const headers: TableDataHeader[] = keys(users[0]).map((key) => ({
    key,
    label: capitalize(key),
  }));

  const sortedColumnValue = get(users[0], sortColumn);
  const isNumberValue = isNumber(sortedColumnValue);
  const isDescending = orderBy === "desc";

  const sortedUsers = isNumberValue
    ? sort(users, (user) => get(user, sortColumn), isDescending)
    : alphabetical(users, (user) => get(user, sortColumn), orderBy);

  const rows: TableDataRow[] = sortedUsers.map(
    ({ id, name, email, sex, gender, status }) => ({
      id,
      name,
      email,
      sex,
      gender,
      status: (
        <span
          style={{
            display: "inline-block",
            padding: "0.5rem",
            backgroundColor:
              status === "active"
                ? colors.surface.primary.green
                : colors.other.primary.pink,
          }}
        >
          {status}
        </span>
      ),
    }),
  );

  return {
    headers,
    rows,
  };
}
