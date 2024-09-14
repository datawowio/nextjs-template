"use client";

import Box from "@mui/material/Box";
import { cluster } from "radash";
import { useEffect } from "react";
import { useImmer } from "use-immer";

import TableGridData from "@/components/core/table-grid-data";

import { generateData } from "./helpers";
import users from "./users.json";

import { ChangeEvent } from "react";
import type { Data, OrderType, Row } from "@/components/core/table-grid-data";
import type { User } from "./types";

export default function TableGridDataScreen() {
  // Hook
  const [state, updateState] = useImmer({
    currentPage: 173,
    data: { headers: [], rows: [] } as Data,
    isLoading: false,
    orderBy: "asc" as OrderType,
    selectAll: false,
    selectedIds: [] as Row["id"][],
    sortColumn: "id",
  });

  // Variables
  const maxRowsPerPage = 10;
  const totalPages = cluster(users, maxRowsPerPage).length;

  // Functions
  async function fetchData() {
    const params = {
      page: state.currentPage + 1,
      pageSize: maxRowsPerPage,
      sortColumn: state.sortColumn,
      orderBy: state.orderBy,
    };

    return await generateData(users as User[], params);
  }

  // Event handlers
  function handlePageChange(page: number) {
    updateState((draft) => {
      draft.currentPage = page;
    });
  }

  function handleSelectRecord(id: Row["id"]) {
    updateState((draft) => {
      if (draft.selectedIds.includes(id)) {
        draft.selectAll = false;
        draft.selectedIds = draft.selectedIds.filter(
          (selectedId) => selectedId !== id,
        );
      } else {
        draft.selectedIds.push(id);
      }
    });
  }

  function handleSelectAllRecords(event: ChangeEvent<HTMLInputElement>) {
    updateState((draft) => {
      draft.selectAll = event.target.checked;

      if (event.target.checked) {
        draft.selectedIds = draft.data.rows.map((row) => row.id);
      } else {
        draft.selectedIds = [];
      }
    });
  }

  function handleSortColumn(column: string, orderBy: OrderType) {
    updateState((draft) => {
      draft.sortColumn = column;
      draft.orderBy = orderBy;
    });
  }

  // Effect hook
  useEffect(() => {
    updateState((draft) => {
      draft.isLoading = true;
    });

    fetchData().then((data) => {
      updateState((draft) => {
        draft.data = data;
        draft.isLoading = false;
      });
    });
  }, [state.currentPage, state.sortColumn, state.orderBy]);

  // Conditional rendering
  if (state.isLoading) {
    return <Box p={4}>Loading...</Box>;
  }

  return (
    <Box p={4}>
      <TableGridData
        currentPage={state.currentPage}
        data={state.data}
        hasCheckboxes
        maxRowPerPage={maxRowsPerPage}
        onPageChange={handlePageChange}
        onSelectAllRecords={handleSelectAllRecords}
        onSelectRecord={handleSelectRecord}
        onSortColumn={handleSortColumn}
        orderBy={state.orderBy}
        selectAll={state.selectAll}
        selectedIds={state.selectedIds}
        sortColumn={state.sortColumn}
        totalPages={totalPages}
      />
    </Box>
  );
}
