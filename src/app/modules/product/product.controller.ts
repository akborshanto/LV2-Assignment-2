import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidationSchema from "./product.validation";

// Create product
const createProduct = async (req: Request, res: Response) => {
  try {
    // Get product data from request body
    const product = req.body;

    // Validate data using Zod
    const zodParsedData = productValidationSchema.parse(product);

    // If validation passes, proceed with creating the product
    const result = await ProductServices.createProductDb(zodParsedData);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    // If Zod validation fails, catch the error and return a meaningful response
    if (error instanceof Error) {
      res.status(400).json({
        status: false,
        message: "Validation failed",
        error: error.message,  // Return the error message to the user
      });
    } else {
      res.status(500).json({
        status: false,
        message: "Internal server error",
        error: error,
      });
    }
  }
};
//get all products
const getProducts = async (req: Request, res: Response) => {
  try {

const products=await ProductServices.getProductDb()

    res.send({
      status: true,
      message: "Bicycles retrieved successfully",
      data:products
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Something went wrong",
      error:error
    });
  }
};

//get single  products
const getSingleProduct=async(req: Request, res: Response) =>{

  try {
    
const {productId}=req.params;
const product=await ProductServices.getSingleProductDB(productId)
res.status(200).send({
  status: true,
  message: "Bicycle retrieved successfully",
  data: product,
});
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Failed to fetch product",
      error:error
    });
  }
}

//update product
const updateProduct=async(req: Request, res: Response) => {
try {
  
const {productId}=req.params;
const updateData=req.body;
const updatedProduct=await ProductServices.updatedProductDB(productId,updateData)
res.status(200).send({
  status: true,
  message: "Bicycle updated successfully",
  data: updatedProduct,
});
} catch (error) {
  res.status(500).send({
    status: false,
    message: "Failed to update product",
    error:error
  });
}


}

//delete product
const deleteProduct=async (req: Request, res: Response) => {


  try {
    const {productId}=req.params;
    const deleteProduct=await ProductServices.deleteProductDB(productId)

    res.status(200).send({
      status: true,
      message: "Bicycle deleted successfully",
      data: deleteProduct,
    });

  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Failed to delete product",
      error:error
    });
  }
}

//transer to router file
export const ProductController = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
