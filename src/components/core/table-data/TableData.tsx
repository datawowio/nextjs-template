import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import TableDataSurface from "./TableDataSurface";

export default function TableData() {
  return (
    <TableContainer component={TableDataSurface}>
      <Table>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
}
