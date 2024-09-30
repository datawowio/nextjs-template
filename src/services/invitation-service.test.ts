import InvitationService from "./invitation-service";

describe("InvitationService", () => {
  const mockBaseUrl = "https://api.example.com";
  const endpoint = "/app/invitation/users";
  let invitationService: InvitationService;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_BASE_URL = mockBaseUrl;
    invitationService = new InvitationService();
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("calls getInviteUsers with the correct URL", async () => {
    const mockResponse = { data: "users" };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await invitationService.getInviteUsers(endpoint);

    expect(global.fetch).toHaveBeenCalledWith(mockBaseUrl + endpoint, {
      method: "GET",
      headers: {
        "Accept-Language": "th",
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6MSwiZW50aXR5VHlwZSI6InN5c3RlbWN0bCIsInBlcm1pc3Npb24iOltdLCJtZW51IjpbXSwiaWF0IjoxNzI3NjY3MzE1LCJleHAiOjE3Mjc2NjgyMTV9.26hNcjk-SBRUW3AaKhM2Qqy2q_E0t5EhzkLN8bNukro", // Example token, ensure this is generated dynamically in your service
      },
    });
    expect(result).toEqual(mockResponse);
  });

  it("calls invite with the correct data", async () => {
    const mockResponse = { data: "invitation sent" };
    const samAccount = "user123";

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await invitationService.invite(samAccount);

    expect(global.fetch).toHaveBeenCalledWith(
      mockBaseUrl + "/app/invitation/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ samAccount }),
      },
    );
    expect(result).toEqual(mockResponse);
  });

  it("calls reInvite with the correct data", async () => {
    const mockResponse = { data: "re-invitation sent" };
    const samAccount = "user123";

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await invitationService.reInvite(samAccount);

    expect(global.fetch).toHaveBeenCalledWith(
      mockBaseUrl + "/app/invitation/resend",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ samAccount }),
      },
    );
    expect(result).toEqual(mockResponse);
  });

  it("calls cancelInvite with the correct data", async () => {
    const mockResponse = { data: "invitation canceled" };
    const samAccount = "user123";

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await invitationService.cancelInvite(samAccount);

    expect(global.fetch).toHaveBeenCalledWith(
      mockBaseUrl + "/app/invitation/cancel",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ samAccount }),
      },
    );
    expect(result).toEqual(mockResponse);
  });

  it("calls validate with the correct data", async () => {
    const mockResponse = { data: "validation successful" };
    const identifier = "id123";

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await invitationService.validate(identifier);

    expect(global.fetch).toHaveBeenCalledWith(
      mockBaseUrl + "/app/invitation/cancel",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier }),
      },
    );
    expect(result).toEqual(mockResponse);
  });

  it("handles fetch errors", async () => {
    const mockError = new Error("Network Error");

    (global.fetch as jest.Mock).mockRejectedValue(mockError);

    await expect(invitationService.getInviteUsers(endpoint)).rejects.toThrow(
      "Network Error",
    );
  });

  it("handles non-OK fetch responses", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
    });

    await expect(invitationService.getInviteUsers(endpoint)).rejects.toEqual(
      "Error: 404",
    );
  });
});
