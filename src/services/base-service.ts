export default class BaseService {
  private readonly baseURL: string;

  constructor() {
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      this.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    } else {
      throw new Error("No base URL provided");
    }
  }

  get(endpoint: string) {
    return this.request(endpoint, {
      method: "GET",
    });
  }

  post(endpoint: string, body: any) {
    console.log(JSON.stringify(body));
    return this.request(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  put(endpoint: string, body: any) {
    return this.request(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  delete(endpoint: string) {
    return this.request(endpoint, {
      method: "DELETE",
    });
  }

  private async request(endpoint: string, options: RequestInit) {
    const baseOptions = {
      ...options,
      headers: {
        ...options.headers,
        "Accept-Language": "th",
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6MSwiZW50aXR5VHlwZSI6InN5c3RlbWN0bCIsInBlcm1pc3Npb24iOltdLCJtZW51IjpbXSwiaWF0IjoxNzI3Njg2MjE5LCJleHAiOjE3Mjc2ODcxMTl9.v6nGGJvsFa3pOIIpUHKALvXGevcvlYwIpjMOY5azURM",
      },
    };
    try {
      const response = await fetch(this.baseURL + endpoint, baseOptions);
      return await (response.ok
        ? response.json()
        : Promise.reject(`Error: ${response.status}`));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
