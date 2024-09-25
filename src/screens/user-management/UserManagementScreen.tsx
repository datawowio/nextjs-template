"use client";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useTranslations } from "next-intl";
import { debounce } from "radash";
import { useCallback } from "react";
import { useImmerReducer } from "use-immer";

import Button from "@/components/core/button";
import Header from "@/components/core/header";
import Pagination from "@/components/core/pagination";
import TableData from "@/components/core/table-data";
import Filters from "./Filters";

import { MOCK_DATA, MOCK_PAGINATION_DATA_FROM_API } from "./fixtures";
import reducer, { initialState } from "./reducer";
import { styles } from "./styles";

import type { ChangeEvent, SyntheticEvent } from "react";
import type { OrderType } from "@/types/sort";

export default function UserManagementScreen() {
  // Hooks
  const t = useTranslations("screens.userManagement");
  const tCommon = useTranslations("common");
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // Computed Variables
  const debouncedFilter = useCallback(
    debounce({ delay: 1000 }, (value: string) => {
      dispatch({ type: "UPDATE_FILTER", payload: { key: "name", value } });
    }),
    [dispatch],
  );

  // Variables
  const filterMessages = {
    search: t("filters.search"),
    show: tCommon("pagination.show"),
    status: t("filters.status"),
    perPage: tCommon("pagination.perPage"),
  };

  const paginationMessages = {
    display: tCommon("pagination.display"),
    filter: tCommon("pagination.filter"),
    info: tCommon("pagination.info"),
    to: tCommon("pagination.to"),
    total: tCommon("pagination.total"),
  };

  // Functions

  function onChangeInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    debouncedFilter(event.target.value);
  }

  function onChangeSelectStatus(_: SyntheticEvent, options: any) {
    dispatch({
      type: "UPDATE_FILTER",
      payload: {
        key: "status",
        value: options?.value,
      },
    });
  }

  function onChangeSelectPagination(_: SyntheticEvent, options: any) {
    dispatch({
      type: "UPDATE_PAGINATION",
      payload: {
        key: "limit",
        value: options?.value,
      },
    });
  }

  // Event handler
  function handleSortColumn(key: string, orderBy: OrderType) {
    dispatch({ type: "UPDATE_SORT", payload: { key, value: orderBy } });
  }

  function handleChangePagination(_e: ChangeEvent<unknown>, page: number) {
    dispatch({
      type: "UPDATE_PAGINATION",
      payload: {
        key: "page",
        value: page,
      },
    });
  }

  return (
    <Stack sx={styles.root}>
      <Header text={t("title")}>
        <Button
          variant="contained"
          sx={styles.buttonCreate}
          startIcon={<AddRoundedIcon />}
        >
          {t("addUser")}
        </Button>
      </Header>
      <Box sx={styles.card}>
        <Filters
          onChangeInput={onChangeInput}
          onChangeSelectStatus={onChangeSelectStatus}
          onChangeSelectPagination={onChangeSelectPagination}
          messages={filterMessages}
        />
        <TableData
          data={MOCK_DATA}
          orderBy={state.sort.orderBy}
          sortColumn={state.sort.key}
          onSortColumn={handleSortColumn}
        />
        <Pagination
          count={MOCK_PAGINATION_DATA_FROM_API.totalPages}
          page={state.pagination.page}
          limit={state.pagination.limit}
          totalItems={MOCK_PAGINATION_DATA_FROM_API.totalItems}
          messages={paginationMessages}
          onChange={handleChangePagination}
          sx={styles.wrapper}
        />
      </Box>
    </Stack>
  );
}
