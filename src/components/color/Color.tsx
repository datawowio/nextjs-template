import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import { visuallyHidden } from "@mui/utils";

import Typography from "@/components/typography";

import ColorSurface from "./ColorSurface";
import { styles } from "./styles";

import type { ColorProps } from "./types";

export default function Color({ title, tones }: ColorProps) {
  return (
    <Stack component="section" spacing={2}>
      <Box component="header">
        <Typography component="h2" customVariant="boldHeadingMD">
          {title}
        </Typography>
      </Box>
      <TableContainer component={ColorSurface}>
        <Table size="small" aria-label="a dense color list table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography
                  customVariant="semiboldHeadingSM"
                  sx={visuallyHidden}
                >
                  Color Preview
                </Typography>
              </TableCell>
              <TableCell>
                <Typography customVariant="semiboldHeadingSM">Key</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography customVariant="semiboldHeadingSM">Hex</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography customVariant="semiboldHeadingSM">RGB</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography customVariant="semiboldHeadingSM">
                  CSS Variable
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tones.map(({ cssVar, hex, key, rgb }) => (
              <TableRow key={key}>
                <TableCell align="center">
                  <Box
                    role="presentation"
                    sx={{
                      ...styles.preview,
                      backgroundColor: `var(${cssVar});`,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Chip label={key} sx={styles.chip} />
                </TableCell>
                <TableCell align="center">{hex}</TableCell>
                <TableCell align="center">{rgb}</TableCell>
                <TableCell align="center">{cssVar}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
