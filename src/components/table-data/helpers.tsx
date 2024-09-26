import Stack from "@mui/material/Stack";

import { IconArrowDown, IconArrowUp } from "@/components/icons";
import { styles } from "@/components/table-data/styles";

import type { OrderType } from "@/types/sort";
import type { Header } from "./types";

export function getIconComponent(
  key: Header["key"],
  sortColumn: string,
  orderBy: OrderType,
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
