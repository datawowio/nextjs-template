import type { OrderType } from "./sort";

interface BasePagination {
  page: number;
  limit: number;
}

interface BaseSortParams {
  key: string;
  orderBy: OrderType;
}

export interface BaseQueryParams {
  pagination: BasePagination;
  sort: BaseSortParams;
}
