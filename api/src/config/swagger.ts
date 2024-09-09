export const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API Documentation for the DApp Template",
    },
    servers: [
      {
        url: "http://localhost:5001/api",
        description: "Local server",
      },
    ],
  },
  apis: ["./src/app.ts"],
};
