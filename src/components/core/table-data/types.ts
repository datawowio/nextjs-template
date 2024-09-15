import { ReactNode } from "react";

export interface Header {
  key: string;
  label: string;
  hidden?: boolean;
}

export interface Row {
  id: number | string;
  [column: string]: ReactNode;
}

export interface Data {
  headers: Header[];
  rows: Row[];
}

export type Order = "asc" | "desc";

export interface TableDataProps {
  data: Data;
  orderBy: Order;
  sortColumn: string;

  onSortColumn?: (key: Header["key"], orderBy: Order) => void;
}
