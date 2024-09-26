import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Input from "@/components/input";
import Select from "@/components/select";
import Typography from "@/components/typography";

import { PAGE_LIMIT_OPTIONS, STATUS_OPTIONS } from "./fixtures";
import { styles } from "./styles";

import type { FilterProps } from "./types";

export default function Filters({
  onChangeInput,
  onChangeSelectStatus,
  onChangeSelectPagination,
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
            onChange={onChangeInput}
            sx={styles.inputSearch}
          />
          <Select
            dataTestId="select-status"
            label={status}
            sx={styles.selectStatus}
            options={statusOptions}
            onChange={onChangeSelectStatus}
          />
        </Box>
        <Box sx={styles.flexWrapper}>
          <Select
            dataTestId="select-limit"
            label={show}
            sx={styles.selectLimit}
            options={PAGE_LIMIT_OPTIONS}
            onChange={onChangeSelectPagination}
          />
          <Typography customVariant="regularParagraphLG">{perPage}</Typography>
        </Box>
      </Box>
    </Stack>
  );
}
