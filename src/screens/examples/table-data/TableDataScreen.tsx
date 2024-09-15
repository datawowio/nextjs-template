"use client";

import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useImmer } from "use-immer";

import TableData from "@/components/core/table-data";
import Typography from "@/components/core/typography";

import { generateData, getUsers } from "./helpers";

import type { Data, Header, Order } from "@/components/core/table-data";

export default function TableDataScreen() {
  // Hook
  const [state, setState] = useImmer({
    data: {
      headers: [],
      rows: [],
    } as Data,
    isLoading: false,
    page: 1,
    pageSize: 10,
    orderBy: "asc" as Order,
    sortColumn: "id",
  });

  // Event handlers
  function handleSortColumn(key: Header["key"], orderBy: Order) {
    setState((draft) => {
      draft.sortColumn = key;
      draft.orderBy = orderBy;
    });
  }

  // Effect hook
  useEffect(() => {
    setState((draft) => {
      draft.isLoading = true;
    });

    getUsers({
      page: state.page,
      pageSize: state.pageSize,
      orderBy: state.orderBy,
      sortColumn: state.sortColumn,
    }).then((users) => {
      setState((draft) => {
        draft.data = generateData(users);
        draft.isLoading = false;
      });
    });
  }, [state.page, state.orderBy, state.sortColumn]);

  // Conditional rendering
  if (state.isLoading) {
    return (
      <Box p={4}>
        <Typography component="p" customVariant="mediumCaptionLG">
          Loading...
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <TableData
        data={state.data}
        onSortColumn={handleSortColumn}
        orderBy={state.orderBy}
        sortColumn={state.sortColumn}
      />
    </Box>
  );
}
