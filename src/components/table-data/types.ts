import { ReactNode } from "react";
import type { BaseComponent } from "@/types/components";

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

export interface TableDataProps extends BaseComponent {
  data: Data;
  orderBy: Order;
  sortColumn: string;

  onSortColumn?: (key: Header["key"], orderBy: Order) => void;
}
