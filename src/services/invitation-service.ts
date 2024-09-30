import BaseService from "./base-service";

export default class InvitationService extends BaseService {
  getInviteUsers(url: string) {
    return this.get(url);
  }

  invite(samAccount: string) {
    return this.post("/app/invitation/users", { samAccount });
  }

  reInvite(samAccount: string) {
    return this.post("/app/invitation/resend", { samAccount });
  }

  cancelInvite(samAccount: string) {
    return this.post("/app/invitation/cancel", { samAccount });
  }

  validate(identifier: string) {
    return this.post("/app/invitation/cancel", { identifier: identifier });
  }
}
