import { Request, Response } from "express";
//create product

import { orderServices } from "./order.service";
const createProduct = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderServices.createOrderDb(order);
console.log(result)
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
