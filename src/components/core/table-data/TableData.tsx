import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import type { Header, TableDataProps } from "./types";
import TableCell from "@mui/material/TableCell";

export default function TableData({
  data,
  orderBy,
  sortColumn,

  onSortColumn,
}: TableDataProps) {
  // Variable
  const visibleHeaders = data.headers.filter((header) => !header.hidden);

  // Event handlers
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
