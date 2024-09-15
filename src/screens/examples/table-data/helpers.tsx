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
import users from "./users.json";

import type { CSSProperties } from "react";
import type { Data, Header, Order, Row } from "@/components/core/table-data";
import type { User } from "./types";

export function getUsers({
  page,
  pageSize,
  orderBy,
  sortColumn,
}: {
  page: number;
  pageSize: number;
  orderBy: Order;
  sortColumn: string;
}): Promise<User[]> {
  const isDescending = orderBy === "desc";
  const sortedUsers = isNumber(get(users[0], sortColumn))
    ? sort(users, (user) => get(user, sortColumn), isDescending)
    : alphabetical(users, (user) => get(user, sortColumn), orderBy);

  const pages = cluster(sortedUsers, pageSize);
  const results = pages[page - 1] as User[];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(results);
    }, 300);
  });
}

export function generateData(users: User[]): Data {
  const headers: Header[] = keys(users[0]).map((key) => ({
    key,
    label: capitalize(key),
    hidden: key === "id",
  }));

  const rows: Row[] = users.map(({ id, name, email, sex, gender, status }) => ({
    id,
    name,
    email,
    sex,
    gender,
    status: <span style={getStatusStyles(status)}>{status}</span>,
  }));

  return {
    headers,
    rows,
  };
}

// Internal function

function getStatusStyles(status: User["status"]): CSSProperties {
  return {
    display: "inline-block",
    padding: "0.5rem",
    backgroundColor:
      status === "active"
        ? colors.surface.primary.green
        : colors.other.primary.pink,
  };
}
