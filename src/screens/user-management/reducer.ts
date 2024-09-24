import type { QueryParams } from "./types";

type QueryParamsAction =
  | { type: "updateFilter"; key: keyof QueryParams["filters"]; value?: string }
  | {
      type: "updatePagination";
      key: keyof QueryParams["pagination"];
      value: number;
    }
  | { type: "updateSort"; key: string; value: "asc" | "desc" };

export const initialState: QueryParams = {
  pagination: {
    page: 1,
    limit: 10,
  },
  filters: {
    name: undefined,
    status: undefined,
  },
  sort: {
    key: "name",
    orderBy: "asc",
  },
};

export function queryParamsReducer(
  draft: QueryParams,
  action: QueryParamsAction,
) {
  switch (action.type) {
    case "updateFilter":
      draft.filters[action.key] = action.value;
      break;
    case "updatePagination":
      draft.pagination[action.key] = action.value;
      break;
    case "updateSort":
      draft.sort.key = action.key;
      draft.sort.orderBy = action.value;
      break;
    default:
      break;
  }
}
