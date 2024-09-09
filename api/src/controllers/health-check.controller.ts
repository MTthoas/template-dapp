// src/controllers/helloController.ts

import { Request, Response } from "express";
import { HealthCheckService } from "../services/health-check.service";

const healthCheckService = new HealthCheckService();

export class HealthCheckController {
  static getStatus(req: Request, res: Response) {
    res.send(healthCheckService.getStatusResponse());
  }
}
