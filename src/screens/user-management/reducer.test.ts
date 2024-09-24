import { produce } from "immer";
import reducer, { initialState } from "./reducer";
import { QueryParamsAction } from "./types";

describe("User Management Reducer", () => {
  it("should update filters when action type is UPDATE_FILTER", () => {
    const action: QueryParamsAction = {
      type: "UPDATE_FILTER",
      key: "name",
      value: "John Doe",
    };

    const nextState = produce(initialState, (draft) => reducer(draft, action));

    expect(nextState.filters.name).toBe("John Doe");
    expect(nextState.filters.status).toBeUndefined();
  });

  it("should update pagination when action type is UPDATE_PAGINATION", () => {
    const action: QueryParamsAction = {
      type: "UPDATE_PAGINATION",
      key: "limit",
      value: 20,
    };

    const nextState = produce(initialState, (draft) => reducer(draft, action));

    expect(nextState.pagination.limit).toBe(20);
    expect(nextState.pagination.page).toBe(1);
  });

  it("should update sort when action type is UPDATE_SORT", () => {
    const action: QueryParamsAction = {
      type: "UPDATE_SORT",
      key: "status",
      value: "desc",
    };

    const nextState = produce(initialState, (draft) => reducer(draft, action));

    expect(nextState.sort.key).toBe("status");
    expect(nextState.sort.orderBy).toBe("desc");
  });

  it("should throw an error for unknown action type", () => {
    const action: any = { type: "UNKNOWN_ACTION" };

    expect(() => {
      produce(initialState, (draft) => reducer(draft, action));
    }).toThrowError("unknown action type in user management");
  });
});
