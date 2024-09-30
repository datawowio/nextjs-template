import queryString from "./queryString";

describe("queryString", () => {
  it("returns an empty string when all parameters are undefined", () => {
    const result = queryString({ search: undefined, page: undefined });
    expect(result).toBe("");
  });

  it("filters out undefined values and convert numbers to strings", () => {
    const result = queryString({
      search: "test",
      page: 1,
      pageSize: undefined,
    });
    expect(result).toBe("search=test&page=1");
  });

  it("handles string parameters correctly", () => {
    const result = queryString({ search: "hello", category: "books" });
    expect(result).toBe("search=hello&category=books");
  });

  it("handles number parameters correctly", () => {
    const result = queryString({ page: 5, pageSize: 10 });
    expect(result).toBe("page=5&pageSize=10");
  });

  it("handles mixed string, number, and undefined parameters", () => {
    const result = queryString({
      search: "test",
      page: 2,
      pageSize: undefined,
    });
    expect(result).toBe("search=test&page=2");
  });

  it("returns an empty string for an empty params object", () => {
    const result = queryString({});
    expect(result).toBe("");
  });
});
