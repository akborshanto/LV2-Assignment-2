import mongoose, { Schema, model, connect } from "mongoose";
import { Product } from "./product.interface";

// 2. Create a Schema corresponding to the document interface.
const productSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: {
      type: String,
      enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: {
      type: String,
      enum: ["stock", "inStock"],
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

export const ProductModel = mongoose.model<Product>("Product", productSchema);
