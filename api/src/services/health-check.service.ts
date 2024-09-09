import { Response as ResponseType } from "../types/response";

export class HealthCheckService {
  getStatusResponse(): ResponseType {
    return {
      message: "Status",
      status: "OK",
    };
  }
}
