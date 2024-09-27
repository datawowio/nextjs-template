import type { QueryParams, QueryParamsAction } from "./types";

export const initialState: QueryParams = {
  pagination: {
    page: 1,
    limit: 10,
  },
  filters: {
    name: undefined,
  },
  sort: {
    key: "name",
    orderBy: "asc",
  },
};

export default function reducer(draft: QueryParams, action: QueryParamsAction) {
  switch (action.type) {
    case "UPDATE_FILTER":
      draft.filters[action.payload.key] = action.payload.value;
      break;
    case "UPDATE_PAGINATION":
      draft.pagination[action.payload.key] = action.payload.value;
      break;
    case "UPDATE_SORT":
      draft.sort.key = action.payload.key;
      draft.sort.orderBy = action.payload.value;
      break;
    default:
      throw new Error(`unknown action type in user management`);
  }
}
