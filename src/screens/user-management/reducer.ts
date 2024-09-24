import type { QueryParams, QueryParamsAction } from "./types";

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

export default function reducer(draft: QueryParams, action: QueryParamsAction) {
  switch (action.type) {
    case "UPDATE_FILTER":
      draft.filters[action.key] = action.value;
      break;
    case "UPDATE_PAGINATION":
      draft.pagination[action.key] = action.value;
      break;
    case "UPDATE_SORT":
      draft.sort.key = action.key;
      draft.sort.orderBy = action.value;
      break;
    default:
      throw new Error(`unknown action type in user management`);
  }
}
