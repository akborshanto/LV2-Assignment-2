import { z } from 'zod';

 const OrderValidatonSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  product: z.string().min(1, "Product ID is required").trim(),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  totalPrice: z.number().min(0, "Total price must be at least 0"),
});
export  default OrderValidatonSchema