import { Request, Response } from "express";
//create product

import { orderServices } from "./order.service";
import OrderValidatonSchema from "./order.validation";
const createProduct = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodParsedData=OrderValidatonSchema.parse(order)

    const result = await orderServices.createOrderDb(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Something went wrong",
      error: error,
    });
  }
};
//tranaser controller file
export const OrderController = {
  createProduct,
};
