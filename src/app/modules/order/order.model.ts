

import mongoose, { Schema, model, connect } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new  Schema<TOrder>({
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
  timestamps: true,
});

export const OrderModel = mongoose.model('Order', orderSchema);

