import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import type { TableDataBodyProps } from "./types";

export default function TableDataBody({ data }: TableDataBodyProps) {
  return (
    <TableBody>
      {data.rows.map((row) => (
        <TableRow key={row.id}>
          {data.headers.map(({ key }) => (
            <TableCell key={key}>{row[key]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
