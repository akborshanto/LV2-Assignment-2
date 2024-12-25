import { Request, Response } from "express";
import { orderServices } from "./order.service"; // Import the service
import OrderValidationSchema from "./order.validation"; // Assuming this is your Zod schema

// Controller to create an order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    // Validate the order data using Zod
    const zodParsedData = OrderValidationSchema.parse(order);

    // Create the order in the database
    const result = await orderServices.createOrderDb(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Something went wrong",
      error: error
    });
  }
};

// Controller to calculate revenue
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const revenueData = await orderServices.calculateTotalRevenue();

    res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: revenueData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Something went wrong",
      error: error
    });
  }
};

export const OrderController = {
  createOrder,
  calculateRevenue,
};
