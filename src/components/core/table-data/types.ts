import type { PaperProps } from "@mui/material/Paper";
import type { ReactNode } from "react";

export interface TableDataSurfaceProps extends Omit<PaperProps, "variant"> {}

export interface VisualHiddenSortedTextProps {
  isShow: boolean;
  text: string;
}

// Define the type for a table header, where the key is a string and the label
// is a ReactNode (which can be JSX)
export interface TableDataHeader {
  key: string; // A unique key to identify the column
  label: ReactNode; // The label can be any JSX or string
}

// Define the type for each row's data
export interface TableDataRow {
  id: number | string; // A unique key to identify the row
  [column: string]: ReactNode; // Each row can have dynamic column names, and the value is any ReactNode (JSX or string)
}

// Define the generic type for the whole table data structure
export interface DataSource {
  headers: TableDataHeader[];
  rows: TableDataRow[];
}

export type OrderType = "asc" | "desc";

export interface TableDataHeaderProps {
  headers: TableDataHeader[];
  orderBy: OrderType;
  sortColumn: string;
  visualHiddenText: string;

  onClickSortColumn?: (columnName: TableDataHeader["key"]) => void;
}

export interface TableDataBodyProps {
  data: DataSource;
}

export interface TableDataProps {
  data: DataSource;
  orderBy: OrderType;
  sortColumn: string;

  hiddenSortedAscendingText?: string;
  hiddenSortedDescendingText?: string;
  onClickSortColumn?: (columnName: TableDataHeader["key"]) => void;
}
