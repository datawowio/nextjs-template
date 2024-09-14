import { ChangeEvent, ReactNode } from "react";

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

export type OrderType = "asc" | "desc";

export interface TableGridDataProps {
  data: Data;
  sortColumn: string;

  ariaLabelSelectAllCheckbox?: string;
  currentPage?: number;
  hasCheckboxes?: boolean;
  maxRowPerPage?: number;
  onPageChange?: (page: number) => void;
  onSelectAllRecords?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectRecord?: (id: Row["id"]) => void;
  onSortColumn?: (column: string, orderBy: OrderType) => void;
  orderBy?: OrderType;
  selectAll?: boolean;
  selectedIds?: Row["id"][];
  totalPages?: number;
}
