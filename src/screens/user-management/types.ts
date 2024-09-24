import type { ChangeEvent, SyntheticEvent } from "react";
import type { BaseQueryParams } from "@/types/query-params";
import type { OrderType } from "@/types/sort";

export interface FilterProps {
  handleChangeInput: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleChangeSelectStatus: (_: SyntheticEvent, options: any) => void;
  handleChangeSelectPagination: (_: SyntheticEvent, options: any) => void;
  messages: {
    search: string;
    status: string;
    show: string;
    perPage: string;
  };
}

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
  type: "UPDATE_FILTER";
  key: keyof QueryParams["filters"];
  value?: string;
}

interface UpdatePaginationAction {
  type: "UPDATE_PAGINATION";
  key: keyof QueryParams["pagination"];
  value: number;
}

interface UpdateSortAction {
  type: "UPDATE_SORT";
  key: string;
  value: OrderType;
}
