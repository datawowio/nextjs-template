import Stack from "@mui/material/Stack";

import { IconArrowDown, IconArrowUp } from "@/components/core/icons";
import { styles } from "@/components/core/table-data/styles";

import type { Header, Order } from "./types";

export function getIconComponent(
  key: Header["key"],
  sortColumn: string,
  orderBy: Order,
) {
  if (sortColumn === key && orderBy === "asc") {
    return <IconArrowDown sx={styles.sortIcon} />;
  } else if (sortColumn === key && orderBy === "desc") {
    return <IconArrowUp sx={styles.sortIcon} />;
  } else {
    return (
      <Stack>
        <IconArrowUp sx={styles.sortIcon} />
        <IconArrowDown sx={[styles.sortIcon, styles.narrowSortIcon]} />
      </Stack>
    );
  }
}
