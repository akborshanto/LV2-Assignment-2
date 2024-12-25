import { OrderController } from "./order.controller";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDb = async (order: TOrder) => {


  const result = await OrderModel.create(order);

  return result;
};
export const orderServices = {
  createOrderDb,
};
