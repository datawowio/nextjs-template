import type { Order } from "@/components/core/table-data";

export interface QueryType {
  pagination: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
  filters: {
    name?: string;
    status?: string;
  };
  sort: {
    key: string;
    orderBy: Order;
  };
}
