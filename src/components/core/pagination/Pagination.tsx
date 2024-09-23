import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

import PaginationInfo from "./PaginationInfo";

import type { PaginationProps } from "./types";

export default function Pagination({
  count,
  dataTestId = "pagination",
  page,
  onChange,
  limit,
  totalItems,
  filteredItems,
  messages,
  sx,
  ...props
}: PaginationProps) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      data-testid={dataTestId}
      sx={sx}
    >
      <PaginationInfo
        limit={limit}
        totalItems={totalItems}
        filteredItems={filteredItems}
        page={page}
        messages={messages}
      />
      <MuiPagination
        {...props}
        sx={undefined}
        count={count}
        page={page}
        onChange={onChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: NavigateBeforeRoundedIcon,
              next: NavigateNextRoundedIcon,
            }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
