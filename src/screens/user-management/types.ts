import type { BaseQueryParams } from "@/types/queryParams";

export interface QueryParams extends BaseQueryParams {
  filters: {
    name?: string;
    status?: string;
  };
}
