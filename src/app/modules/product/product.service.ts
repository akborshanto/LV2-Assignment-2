import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductDb = async (product: Product) => {
  const result = await ProductModel.create(product);

  return result;
};

//GET ALL DATA
const getProductDb = async () => {
  const result = await ProductModel.find();
  return result;
};
//GET SINGLE DATA
const getSingleProductDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};
//UPDATE PRICE AND QUANTITY
const updatedProductDB = async (
  productId: string,
  updateData: Partial<Product>
) => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    productId,
    updateData,
    { new: true }
  );
  return updatedProduct;
};
//DELETE PRODUCT
const deleteProductDB=async(productId:string)=>{

const deleteProduct=await ProductModel.updateOne({productId},{isDeleted:true})
return deleteProduct;
}
//tranaser controller file
export const ProductServices = {
  createProductDb,
  getProductDb,
  getSingleProductDB,
  updatedProductDB,
  deleteProductDB
};
