"use client";

import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import { isNumber } from "radash";

import type { MouseEvent } from "react";
import type { TableGridDataProps } from "./types";

export default function TableGridData({
  data,
  sortColumn,

  ariaLabelSelectAllCheckbox = "Select all records",
  currentPage = 0,
  hasCheckboxes = false,
  maxRowPerPage = Number.MAX_SAFE_INTEGER,
  onPageChange,
  onSelectAllRecords,
  onSelectRecord,
  onSortColumn,
  orderBy = "asc",
  selectAll = false,
  selectedIds = [],
  totalPages = 1,
}: TableGridDataProps) {
  // Variable
  const visibleHeaders = data.headers.filter((header) => !header.hidden);

  // Event handlers
  function handlePageChange(
    _: MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) {
    onPageChange && onPageChange(page);
  }

  function handleSelectRecord(id: number | string) {
    onSelectRecord && onSelectRecord(id);
  }

  function handleSortClick(column: string) {
    const isAsc = sortColumn === column && orderBy === "asc";
    const updatedOrderBy = isAsc ? "desc" : "asc";

    onSortColumn && onSortColumn(column, updatedOrderBy);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {hasCheckboxes && (
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectAll}
                  indeterminate={false}
                  inputProps={{ "aria-label": ariaLabelSelectAllCheckbox }}
                  onChange={onSelectAllRecords}
                />
              </TableCell>
            )}
            {visibleHeaders.map(({ key, label }) => (
              <TableCell
                key={key}
                sortDirection={sortColumn === key ? orderBy : false}
              >
                <TableSortLabel
                  active={sortColumn === key}
                  direction={sortColumn === key ? orderBy : "asc"}
                  onClick={() => handleSortClick(key)}
                >
                  {label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row) => (
            <TableRow key={row.id}>
              {hasCheckboxes && (
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedIds?.includes(row.id)}
                    inputProps={{
                      "aria-labelledby": isNumber(row.id)
                        ? String(row.id)
                        : row.id,
                    }}
                    onChange={() => handleSelectRecord(row.id)}
                  />
                </TableCell>
              )}
              {visibleHeaders.map(({ key }) => (
                <TableCell key={`${row.id}-${key}`}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={totalPages * maxRowPerPage}
        onPageChange={handlePageChange}
        page={currentPage}
        rowsPerPage={maxRowPerPage}
        rowsPerPageOptions={[maxRowPerPage]}
      />
    </TableContainer>
  );
}
