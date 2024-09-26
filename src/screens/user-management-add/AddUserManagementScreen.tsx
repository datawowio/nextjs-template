"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useTranslations } from "next-intl";
import { debounce } from "radash";
import { useImmerReducer } from "use-immer";

import Header from "@/components/header";
import Pagination from "@/components/pagination";
import { ROUTE } from "@/constants/routes";
import TableData from "@/components/table-data";

import Filters from "./Filters";
import { MOCK_DATA, MOCK_PAGINATION_DATA_FROM_API } from "./fixtures";
import reducer, { initialState } from "./reducer";
import { styles } from "./styles";

import type { ChangeEvent, SyntheticEvent } from "react";
import type { OrderType } from "@/types/sort";

export default function UserManagementScreen() {
  // Hooks
  const t = useTranslations("screens.userManagementAdd");
  const tCommon = useTranslations("common");
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // Computed Variables
  function debouncedFilter(value: string) {
    debounce({ delay: 1000 }, function () {
      dispatch({ type: "UPDATE_FILTER", payload: { key: "name", value } });
    })();
  }

  // Variables
  const breadcrumbs = [
    {
      href: ROUTE.userManagementDashboard.path,
      name: t("breadcrumbs.usermanagement"),
    },
    {
      name: t("title"),
    },
  ];

  const filterMessages = {
    search: t("filters.search"),
    show: tCommon("pagination.show"),
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

  function onChangeSelectPagination(_: SyntheticEvent, options: any) {
    dispatch({
      type: "UPDATE_PAGINATION",
      payload: {
        key: "limit",
        value: options?.value,
      },
    });
  }

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
      <Header
        text={t("title")}
        breadcrumbs={breadcrumbs}
        hrefBack={ROUTE.userManagementDashboard.path}
      />
      <Box sx={styles.card}>
        <Filters
          onChangeInput={onChangeInput}
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
