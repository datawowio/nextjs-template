import BaseService from "@/services/base-service";

export default class SampleService extends BaseService {
  getSamples(endpoint = "/api/v1/sample") {
    return this.get(endpoint);
  }
}
