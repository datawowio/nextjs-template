import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import VisualHiddenSortedText from "./VisualHiddenSortedText";

import type { TableDataHeader, TableDataHeaderProps } from "./types";

export default function TableDataHeader({
  headers,
  onClickSortColumn,
  orderBy,
  sortColumn,
  visualHiddenText,
}: TableDataHeaderProps) {
  // Event handlers
  function handleClick(key: TableDataHeader["key"]) {
    onClickSortColumn && onClickSortColumn(key);
  }

  return (
    <TableHead>
      <TableRow>
        {headers.map(({ key, label }) => (
          <TableCell
            key={key}
            sortDirection={sortColumn === key ? orderBy : false}
          >
            <TableSortLabel
              active={sortColumn === key}
              direction={sortColumn === key ? orderBy : "asc"}
              onClick={() => handleClick(key)}
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
  );
}
