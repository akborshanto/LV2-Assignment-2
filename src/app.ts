import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.routes";
import { OrderRoutes } from "./app/modules/order/order.routes";

const app:Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
//application routers
app.use('/api/v1/product',ProductRoutes)
//order controller
app.use('/api/orders',OrderRoutes)



// Export the app for use in server.ts or other files
export default app;
