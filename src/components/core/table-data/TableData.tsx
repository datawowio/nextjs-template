"use client";

import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { isNumber } from "radash";
import { useImmer } from "use-immer";

import type { ChangeEvent } from "react";
import type { Header, Row, TableDataProps } from "./types";

export default function TableData({
  data,
  orderBy,
  sortColumn,

  ariaLabelSelectAllCheckbox = "Select all records",
  hasCheckboxes = false,
  onSelectChange,
  onSortColumn,
}: TableDataProps) {
  // Hook
  const [state, setState] = useImmer({
    selectAll: false,
    selectedIds: [] as Row["id"][],
  });

  // Variable
  const visibleHeaders = data.headers.filter((header) => !header.hidden);

  // Event handlers
  function handleChangeSelectAll(event: ChangeEvent<HTMLInputElement>) {
    setState((draft) => {
      draft.selectAll = event.target.checked;

      if (event.target.checked) {
        draft.selectedIds = data.rows.map((row) => row.id);
      } else {
        draft.selectedIds = [];
      }

      onSelectChange?.(event.target.checked, []);
    });
  }

  function handleChangeSelect(id: Row["id"]) {
    setState((draft) => {
      draft.selectAll = false;

      if (draft.selectedIds.includes(id)) {
        draft.selectedIds = draft.selectedIds.filter(
          (selectedId) => selectedId !== id,
        );
      } else {
        draft.selectedIds.push(id);
      }

      onSelectChange?.(false, [...draft.selectedIds]);
    });
  }

  function handleClickSortColumn(key: Header["key"]) {
    if (key === sortColumn && orderBy === "asc") {
      onSortColumn?.(key, "desc");
    } else {
      onSortColumn?.(key, "asc");
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {hasCheckboxes && (
              <TableCell padding="checkbox">
                <Checkbox
                  checked={state.selectAll}
                  disableRipple={true}
                  inputProps={{ "aria-label": ariaLabelSelectAllCheckbox }}
                  onChange={handleChangeSelectAll}
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
                  onClick={() => handleClickSortColumn(key)}
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
                    checked={state.selectedIds.includes(row.id)}
                    inputProps={{
                      "aria-labelledby": isNumber(row.id)
                        ? String(row.id)
                        : row.id,
                    }}
                    onChange={() => handleChangeSelect(row.id)}
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
    </TableContainer>
  );
}
