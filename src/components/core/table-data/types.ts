import type { PaperProps } from "@mui/material/Paper";
import type { MouseEvent, ReactNode } from "react";

export interface TableDataSurfaceProps extends Omit<PaperProps, "variant"> {}

export interface VisualHiddenSortedTextProps {
  isShow: boolean;
  text: string;
}

// Define the type for a table header, where the key is a string and the label
// is a ReactNode (which can be JSX)
export interface TableHeader {
  key: string; // A unique key to identify the column
  label: ReactNode; // The label can be any JSX or string
}

// Define the type for each row's data
export interface TableRow {
  id: number | string; // A unique key to identify the row
  [column: string]: ReactNode; // Each row can have dynamic column names, and the value is any ReactNode (JSX or string)
}

// Define the generic type for the whole table data structure
export interface TableData {
  headers: TableHeader[];
  rows: TableRow[];
}

export interface TableDataProps {
  data: TableData;
  orderBy: "asc" | "desc";
  sortColumn: string;

  hiddenSortedAscendingText?: string;
  hiddenSortedDescendingText?: string;
  onRequestSort?: (
    event: MouseEvent<HTMLSpanElement>,
    columnName: TableHeader["key"],
  ) => void;
}
