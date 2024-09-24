import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Input from "@/components/core/input";
import Select from "@/components/core/select";
import Typography from "@/components/core/typography";

import { PAGE_LIMIT_OPTIONS, STATUS_OPTIONS } from "./fixtures";
import { styles } from "./styles";

import type { FilterProps } from "./types";

export default function Filters({
  handleChangeInput,
  handleChangeSelectStatus,
  handleChangeSelectPagination,
  messages,
}: FilterProps) {
  const { search, status, show, perPage } = messages;
  const statusOptions = STATUS_OPTIONS();

  return (
    <Stack sx={styles.wrapper}>
      <Box sx={styles.flexWrapper}>
        <Box sx={styles.flexWrapperGrow}>
          <Input
            label={search}
            InputProps={{
              endAdornment: <SearchRoundedIcon sx={styles.iconSearch} />,
            }}
            onChange={handleChangeInput}
            sx={styles.inputSearch}
          />
          <Select
            label={status}
            sx={styles.selectStatus}
            options={statusOptions}
            onChange={handleChangeSelectStatus}
          />
        </Box>
        <Box sx={styles.flexWrapper}>
          <Select
            label={show}
            sx={styles.selectLimit}
            options={PAGE_LIMIT_OPTIONS}
            onChange={handleChangeSelectPagination}
          />
          <Typography customVariant="regularParagraphLG">{perPage}</Typography>
        </Box>
      </Box>
    </Stack>
  );
}
