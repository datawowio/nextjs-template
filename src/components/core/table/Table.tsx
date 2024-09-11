import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableSurface from "@/components/core/table/TableSurface";

export default function Table() {
  return (
    <TableContainer component={TableSurface}>
      <MUITable>
        <TableHead></TableHead>
        <TableBody></TableBody>
      </MUITable>
    </TableContainer>
  );
}
