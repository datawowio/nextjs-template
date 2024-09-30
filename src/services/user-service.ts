import BaseService from "./base-service";

export interface UserInfo {
  id: number;
  fullname: string;
  email: string;
  samAccount: string;
  status: "active" | "inactive" | "invited" | "rejected" | null;
}

interface UserInfoResponse {
  data?: Array<UserInfo>;
}

export default class UserService extends BaseService {
  getUsers(url: string): Promise<UserInfoResponse> {
    return this.get(url);
  }

  register({
    departmentId,
    sectionId,
  }: {
    departmentId: number;
    sectionId: number;
  }) {
    return this.post("/app/users/register", { departmentId, sectionId });
  }
}
