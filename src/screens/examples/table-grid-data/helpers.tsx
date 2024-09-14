import {
  alphabetical,
  capitalize,
  cluster,
  get,
  isNumber,
  keys,
  sort,
} from "radash";

import { colors } from "@/config/palette";

import type {
  Data,
  Header,
  OrderType,
  Row,
} from "@/components/core/table-grid-data";
import type { User } from "./types";

export function generateData(
  users: User[],
  params: {
    page: number;
    pageSize: number;
    sortColumn: string;
    orderBy: OrderType;
  },
): Promise<Data> {
  if (users.length === 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          headers: [],
          rows: [],
        });
      }, 300);
    });
  }

  const headers: Header[] = keys(users[0]).map((key) => ({
    key,
    label: capitalize(key),
    hidden: key === "id",
  }));

  const sortedColumnValue = get(users[0], params.sortColumn);
  const isNumberValue = isNumber(sortedColumnValue);
  const isDescending = params.orderBy === "desc";

  const sortedUsers = isNumberValue
    ? sort(users, (user) => get(user, params.sortColumn), isDescending)
    : alphabetical(
        users,
        (user) => get(user, params.sortColumn),
        params.orderBy,
      );

  const pages = cluster(sortedUsers, params.pageSize);
  const selectedPageUsers = pages[params.page - 1];

  const getStatusStyles = (status: User["status"]) => ({
    display: "inline-block",
    padding: "0.5rem",
    backgroundColor:
      status === "active"
        ? colors.surface.primary.green
        : colors.other.primary.pink,
  });

  const rows: Row[] = selectedPageUsers.map(
    ({ id, name, email, sex, gender, status }) => ({
      id,
      name,
      email,
      sex,
      gender,
      status: <span style={getStatusStyles(status)}>{status}</span>,
    }),
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        headers,
        rows,
      });
    }, 300);
  });
}
