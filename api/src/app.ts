import cors from "cors";
import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./config/swagger";
import { HealthCheckRoutes } from "./routes/health-check.routes";
import { UserRoutes } from "./routes/user.routes";

const app = express();

// Enable JSON body parser
app.use(express.json());
app.use(cors());


const healthCheckRoutes = new HealthCheckRoutes();
const userRoutes = new UserRoutes();

app.use('/api', healthCheckRoutes.router);  // Utilisation de l'instance
app.use('/api', userRoutes.router);  // Utilisation de l'instance

// Initialize swagger
const swaggerSpec = swaggerJsdoc(swaggerConfig);
app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
