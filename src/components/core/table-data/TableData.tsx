"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import Typography from "@/components/core/typography";

import TableDataSurface from "./TableDataSurface";
import { getIconComponent } from "./helpers";
import { styles } from "./styles";

import type { Header, TableDataProps } from "./types";

export default function TableData({
  data,
  dataTestId = "table-data",
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
    <TableContainer component={TableDataSurface} data-testid={dataTestId}>
      <Table>
        <TableHead>
          <TableRow>
            {visibleHeaders.map(({ key, label }) => (
              <TableCell
                key={key}
                sortDirection={sortColumn === key ? orderBy : false}
                sx={styles.headerCell}
              >
                <TableSortLabel
                  active={sortColumn === key}
                  direction={sortColumn === key ? orderBy : "asc"}
                  onClick={() => handleClickSortColumn(key)}
                  IconComponent={() =>
                    getIconComponent(key, sortColumn, orderBy)
                  }
                  sx={styles.sortLabel}
                >
                  <Typography
                    component="span"
                    customVariant="mediumParagraphMD"
                  >
                    {label}
                  </Typography>
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row) => (
            <TableRow key={row.id} sx={styles.bodyCell}>
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
