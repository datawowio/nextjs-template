import type { ChangeEvent, SyntheticEvent } from "react";
import type { BaseQueryParams } from "@/types/query-params";
import type { OrderType } from "@/types/sort";

export interface FilterProps {
  onChangeInput: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onChangeSelectPagination: (event: SyntheticEvent, options: any) => void;
  messages: {
    search: string;
    show: string;
    perPage: string;
  };
}

export interface QueryParams extends BaseQueryParams {
  filters: {
    name?: string;
  };
}

export type QueryParamsAction =
  | UpdateFilterAction
  | UpdatePaginationAction
  | UpdateSortAction;

interface UpdateFilterAction {
  type: "UPDATE_FILTER";
  payload: {
    key: keyof QueryParams["filters"];
    value?: string;
  };
}

interface UpdatePaginationAction {
  type: "UPDATE_PAGINATION";
  payload: { key: keyof QueryParams["pagination"]; value: number };
}

interface UpdateSortAction {
  type: "UPDATE_SORT";
  payload: { key: string; value: OrderType };
}
