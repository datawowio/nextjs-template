import type { Order } from "@/components/core/table-data";

interface BasePagination {
  page: number;
  limit: number;
}

interface BaseSortParams {
  key: string;
  orderBy: Order;
}

export interface BaseQueryParams {
  pagination: BasePagination;
  sort: BaseSortParams;
}
