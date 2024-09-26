import { produce } from "immer";
import reducer, { initialState } from "./reducer";
import { QueryParamsAction } from "./types";

describe("Add User Management Reducer", () => {
  it("updates filters when action type is UPDATE_FILTER", () => {
    const action: QueryParamsAction = {
      type: "UPDATE_FILTER",
      payload: {
        key: "name",
        value: "John Doe",
      },
    };

    const nextState = produce(initialState, (draft) => reducer(draft, action));

    expect(nextState.filters.name).toBe("John Doe");
  });

  it("updates pagination when action type is UPDATE_PAGINATION", () => {
    const action: QueryParamsAction = {
      type: "UPDATE_PAGINATION",
      payload: {
        key: "limit",
        value: 20,
      },
    };

    const nextState = produce(initialState, (draft) => reducer(draft, action));

    expect(nextState.pagination.limit).toBe(20);
    expect(nextState.pagination.page).toBe(1);
  });

  it("updates sort when action type is UPDATE_SORT", () => {
    const action: QueryParamsAction = {
      type: "UPDATE_SORT",
      payload: {
        key: "status",
        value: "desc",
      },
    };

    const nextState = produce(initialState, (draft) => reducer(draft, action));

    expect(nextState.sort.key).toBe("status");
    expect(nextState.sort.orderBy).toBe("desc");
  });

  it("throws an error for unknown action type", () => {
    const action: any = { type: "UNKNOWN_ACTION" };

    expect(() => {
      produce(initialState, (draft) => reducer(draft, action));
    }).toThrowError("unknown action type in user management");
  });
});
