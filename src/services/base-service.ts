export default class BaseService {
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get(endpoint: string) {
    return this.request(endpoint, {
      method: "GET",
    });
  }

  post(endpoint: string, body: any) {
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
    try {
      const response = await fetch(this.baseURL + endpoint, options);
      return await (response.ok
        ? response.json()
        : Promise.reject(`Error: ${response.status}`));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
