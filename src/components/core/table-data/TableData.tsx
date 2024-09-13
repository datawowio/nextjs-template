"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import TableDataSurface from "./TableDataSurface";
import VisualHiddenSortedText from "./VisualHiddenSortedText";

import type { MouseEvent } from "react";
import type { TableDataProps, TableHeader } from "./types";

export default function TableData({
  data,
  sortColumn,
  orderBy,

  hiddenSortedAscendingText = "sorted ascending",
  hiddenSortedDescendingText = "sorted descending",
  onRequestSort,
}: TableDataProps) {
  // Variable
  const visualHiddenText =
    orderBy === "asc" ? hiddenSortedAscendingText : hiddenSortedDescendingText;

  // Event handler
  function createSortHandler(columnName: TableHeader["key"]) {
    return function (event: MouseEvent<HTMLSpanElement>) {
      onRequestSort && onRequestSort(event, columnName);
    };
  }

  return (
    <TableContainer component={TableDataSurface}>
      <Table>
        <TableHead>
          <TableRow>
            {data.headers.map(({ key, label }) => (
              <TableCell
                key={key}
                sortDirection={sortColumn === key ? orderBy : false}
              >
                <TableSortLabel
                  active={sortColumn === key}
                  direction={sortColumn === key ? orderBy : "asc"}
                  onClick={createSortHandler(key)}
                >
                  {label}
                  <VisualHiddenSortedText
                    isShow={orderBy === key}
                    text={visualHiddenText}
                  />
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row) => (
            <TableRow key={row.id}>
              {data.headers.map(({ key }) => (
                <TableCell key={key}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
