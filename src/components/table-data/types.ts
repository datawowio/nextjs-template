import type { ReactNode } from "react";
import type { BaseComponent } from "@/types/components";
import type { OrderType } from "@/types/sort";

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

export interface TableDataProps extends BaseComponent {
  data: Data;
  orderBy: OrderType;
  sortColumn: string;

  onSortColumn?: (key: Header["key"], orderBy: OrderType) => void;
}
