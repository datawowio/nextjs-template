"use client";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

import TableDataBody from "./TableDataBody";
import TableDataHeader from "./TableDataHeader";
import TableDataSurface from "./TableDataSurface";

import type { TableDataProps } from "./types";

export default function TableData({
  data,
  sortColumn,
  orderBy,

  hiddenSortedAscendingText = "sorted ascending",
  hiddenSortedDescendingText = "sorted descending",
  onClickSortColumn,
}: TableDataProps) {
  // Variables
  const isEmptyHeaders = data.headers.length === 0;
  const isEmptyRows = data.rows.length === 0;
  const visualHiddenText =
    orderBy === "asc" ? hiddenSortedAscendingText : hiddenSortedDescendingText;

  // Conditional rendering
  if (isEmptyHeaders && isEmptyRows) {
    throw new Error("invalid data table");
  }

  return (
    <TableContainer component={TableDataSurface}>
      <Table>
        <TableDataHeader
          headers={data.headers}
          onClickSortColumn={onClickSortColumn}
          orderBy={orderBy}
          sortColumn={sortColumn}
          visualHiddenText={visualHiddenText}
        />
        <TableDataBody data={data} />
      </Table>
    </TableContainer>
  );
}
