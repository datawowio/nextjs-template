"use client";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import { useImmer } from "use-immer";

import TableDataBody from "./TableDataBody";
import TableDataHeader from "./TableDataHeader";
import TableDataSurface from "./TableDataSurface";

import type { ChangeEvent } from "react";
import type { TableDataProps, TableDataRow } from "./types";

export default function TableData({
  data,
  sortColumn,
  orderBy,

  hasCheckboxes = true,
  hiddenSortedAscendingText = "sorted ascending",
  hiddenSortedDescendingText = "sorted descending",
  onClickSortColumn,
  rowCount = data.rows.length,
}: TableDataProps) {
  // Hook
  const [selected, setSelected] = useImmer<TableDataRow["id"][]>([]);

  // Variables
  const isEmptyHeaders = data.headers.length === 0;
  const isEmptyRows = data.rows.length === 0;
  const visualHiddenText =
    orderBy === "asc" ? hiddenSortedAscendingText : hiddenSortedDescendingText;

  // Event handlers
  function handleSelectedAll(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      const ids = data.rows.map((row) => row.id);
      setSelected((draft) => (draft = ids));
    } else {
      setSelected((draft) => (draft = []));
    }
  }

  console.log(selected);

  // Conditional rendering
  if (isEmptyHeaders && isEmptyRows) {
    throw new Error("invalid data table");
  }

  return (
    <TableContainer component={TableDataSurface}>
      <Table>
        <TableDataHeader
          hasCheckboxes={hasCheckboxes}
          headers={data.headers}
          onClickSortColumn={onClickSortColumn}
          onSelectedAll={handleSelectedAll}
          orderBy={orderBy}
          rowCount={rowCount}
          selectedCount={selected.length}
          sortColumn={sortColumn}
          visualHiddenText={visualHiddenText}
        />
        <TableDataBody data={data} hasCheckboxes={hasCheckboxes} />
      </Table>
    </TableContainer>
  );
}
