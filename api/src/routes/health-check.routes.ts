import { Router } from "express";
import { HealthCheckController } from "../controllers/health-check.controller";

export class HealthCheckRoutes {
  public router: Router;
  private healthCheckController: HealthCheckController;

  constructor() {
    this.router = Router();
    this.healthCheckController = new HealthCheckController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @swagger
     * /health-check/:
     *   get:
     *     summary: Returns an health status
     *     tags: [HealthCheck]  
     *     responses:
     *       200:
     *         description: An health-check response
     */
    this.router.get("/health-check", this.healthCheckController.getStatus.bind(this.healthCheckController));
  }
}
