import { OrderModel } from "./order.model"; // Assuming OrderModel is imported here
import { TOrder } from "./order.interface";

// Service to create an order
const createOrderDb = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

// Service to calculate total revenue
const calculateTotalRevenue = async () => {
  try {
    // Aggregation pipeline to calculate total revenue
    const revenueAggregation = [
      {
        $lookup: {
          from: "products", // Make sure this is the correct collection name
          localField: "product", // Product field in orders collection
          foreignField: "_id", // Product ID in products collection
          as: "productDetails", // Name of the field to hold product data
        },
      },
      {
        $unwind: {
          path: "$productDetails", // Flatten the productDetails array
          preserveNullAndEmptyArrays: true, // Keep orders even if no matching product
        },
      },
      {
        // Calculate revenue (quantity * price) for each order
        $addFields: {
          revenue: {
            $cond: {
              if: { $gt: [{ $size: "$productDetails" }, 0] }, // Check if productDetails exists
              then: { $multiply: ["$quantity", "$productDetails.price"] }, // Multiply quantity with price
              else: 0, // If no product details, set revenue to 0
            },
          },
        },
      },
      {
        // Sum up all the revenues from the orders
        $group: {
          _id: null, // We don't need grouping by any specific field
          totalRevenue: { $sum: "$revenue" }, // Sum of the revenue field
        },
      },
    ];

    // Execute the aggregation query
    const result = await OrderModel.aggregate(revenueAggregation);

    // If no revenue is calculated
    if (result.length === 0) {
      return { totalRevenue: 0 };
    }

    return { totalRevenue: result[0].totalRevenue }; // Return total revenue
  } catch (error) {
    throw new Error("Error calculating revenue");
  }
};


export const orderServices = {
  createOrderDb,
  calculateTotalRevenue,
};
