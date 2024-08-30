import BaseService from "./base-service";

describe("BaseService", () => {
  const mockBaseUrl = "https://api.example.com";
  const endpoint = "/test";
  let baseService: BaseService;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_BASE_URL = mockBaseUrl;
    baseService = new BaseService();
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("throws an error if no base URL is provided", () => {
    delete process.env.NEXT_PUBLIC_BASE_URL;
    expect(() => new BaseService()).toThrow("No base URL provided");
  });

  it("makes a GET request", async () => {
    const mockResponse = { data: "test" };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await baseService.get(endpoint);

    expect(global.fetch).toHaveBeenCalledWith(mockBaseUrl + endpoint, {
      method: "GET",
    });
    expect(result).toEqual(mockResponse);
  });

  it("makes a POST request", async () => {
    const mockResponse = { data: "test" };
    const postData = { key: "value" };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await baseService.post(endpoint, postData);

    expect(global.fetch).toHaveBeenCalledWith(mockBaseUrl + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    expect(result).toEqual(mockResponse);
  });

  it("makes a PUT request", async () => {
    const mockResponse = { data: "test" };
    const putData = { key: "value" };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await baseService.put(endpoint, putData);

    expect(global.fetch).toHaveBeenCalledWith(mockBaseUrl + endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(putData),
    });
    expect(result).toEqual(mockResponse);
  });

  it("makes a DELETE request", async () => {
    const mockResponse = { data: "test" };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await baseService.delete(endpoint);

    expect(global.fetch).toHaveBeenCalledWith(mockBaseUrl + endpoint, {
      method: "DELETE",
    });
    expect(result).toEqual(mockResponse);
  });

  it("handles fetch errors", async () => {
    const mockError = new Error("Network Error");

    (global.fetch as jest.Mock).mockRejectedValue(mockError);

    await expect(baseService.get(endpoint)).rejects.toThrow("Network Error");
  });

  it("handles non-OK fetch responses", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
    });

    await expect(baseService.get(endpoint)).rejects.toEqual("Error: 404");
  });
});
