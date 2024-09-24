import type { BaseQueryParams } from "@/types/queryParams";

export interface QueryParams extends BaseQueryParams {
  filters: {
    name?: string;
    status?: string;
  };
}

export type QueryParamsAction =
  | UpdateFilterAction
  | UpdatePaginationAction
  | UpdateSortAction;

interface UpdateFilterAction {
  type: "updateFilter";
  key: keyof QueryParams["filters"];
  value?: string;
}

interface UpdatePaginationAction {
  type: "updatePagination";
  key: keyof QueryParams["pagination"];
  value: number;
}

interface UpdateSortAction {
  type: "updateSort";
  key: string;
  value: "asc" | "desc";
}
