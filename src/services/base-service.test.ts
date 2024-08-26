import BaseService from "./base-service";

global.fetch = jest.fn();

describe("BaseService", () => {
  const baseURL = "http://localhost/api";
  const baseService = new BaseService(baseURL);

  beforeEach(() => {
    (fetch as jest.Mock).mockClear(); // Clear mock before each test
  });

  it("calls fetch with correct URL and method for GET", async () => {
    const endpoint = "/test-endpoint";
    const mockResponse = { data: "test data" };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const response = await baseService.get(endpoint);

    expect(fetch).toHaveBeenCalledWith(baseURL + endpoint, { method: "GET" });
    expect(response).toEqual(mockResponse);
  });

  it("calls fetch with correct URL, method, and body for POST", async () => {
    const endpoint = "/test-endpoint";
    const body = { key: "value" };
    const mockResponse = { data: "test data" };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const response = await baseService.post(endpoint, body);

    expect(fetch).toHaveBeenCalledWith(baseURL + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    expect(response).toEqual(mockResponse);
  });

  it("calls fetch with correct URL, method, and body for PUT", async () => {
    const endpoint = "/test-endpoint";
    const body = { key: "value" };
    const mockResponse = { data: "test data" };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const response = await baseService.put(endpoint, body);

    expect(fetch).toHaveBeenCalledWith(baseURL + endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    expect(response).toEqual(mockResponse);
  });

  it("calls fetch with correct URL and method for DELETE", async () => {
    const endpoint = "/test-endpoint";
    const mockResponse = { data: "test data" };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const response = await baseService.delete(endpoint);

    expect(fetch).toHaveBeenCalledWith(baseURL + endpoint, {
      method: "DELETE",
    });
    expect(response).toEqual(mockResponse);
  });

  it("handles fetch errors", async () => {
    const mockError = new Error("Network Error");
    (fetch as jest.Mock).mockRejectedValue(mockError);

    await expect(baseService.get("/test-endpoint")).rejects.toThrow(
      "Network Error",
    );
    expect(fetch).toHaveBeenCalledWith(`${baseURL}/test-endpoint`, {
      method: "GET",
    });
  });

  it("handles non-OK responses", async () => {
    const endpoint = "/test-endpoint";

    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
    });

    await expect(baseService.get(endpoint)).rejects.toBe("Error: 404");
  });
});
