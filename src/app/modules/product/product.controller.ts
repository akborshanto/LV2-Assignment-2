import { Request, Response } from "express";
import { ProductServices } from "./product.service";
//create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.createProductDb(product);

    res.status(200).json({
      success: true,
      message: "Bicycle created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Validation failed",
      error:error
    });
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
      message: "Product deleted successfully",
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
