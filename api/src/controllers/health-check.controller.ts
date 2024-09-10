import { Request, Response } from "express";
import { HealthCheckService } from "../services/health-check.service";

export class HealthCheckController {
  private healthCheckService: HealthCheckService;

  constructor() {
    this.healthCheckService = new HealthCheckService();
  }

  public getStatus(req: Request, res: Response): void {
    const statusResponse = this.healthCheckService.getStatusResponse();
    res.send(statusResponse);
  }
}
