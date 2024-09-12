"use client";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";

import TableDataSurface from "./TableDataSurface";

import type { MouseEvent } from "react";
import type { TableDataProps, TableHeader } from "./types";

export default function TableData({
  data,
  sortColumn,
  orderBy,

  onRequestSort,
}: TableDataProps) {
  // Event handler
  function createSortHandler(columnName: TableHeader["key"]) {
    return function (event: MouseEvent<unknown>) {
      onRequestSort && onRequestSort(event, columnName);
    };
  }

  return (
    <TableContainer component={TableDataSurface}>
      <Table>
        <TableHead>
          <TableRow>
            {data.headers.map(({ key, label }) => (
              <TableCell key={key}>
                <TableSortLabel
                  active={sortColumn === key}
                  direction={orderBy === "asc" ? "asc" : "desc"}
                  onClick={createSortHandler(key)}
                >
                  {label}
                  {orderBy === key ? (
                    <Box component="span" sx={visuallyHidden}>
                      {orderBy === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map(({ id, ...row }) => (
            <TableRow key={id}>
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
