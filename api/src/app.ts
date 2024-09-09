import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./config/swagger";
import { HealthCheckController } from "./controllers/health-check.controller";

const app = express();

// Enable JSON body parser
app.use(express.json());

// Initialize swagger
const swaggerSpec = swaggerJsdoc(swaggerConfig);
app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /health-check/:
 *   get:
 *     summary: Returns a welcome message
 *     responses:
 *       200:
 *         description: A health-check
 */
app.get("/api/health-check/", HealthCheckController.getStatus);

export default app;
