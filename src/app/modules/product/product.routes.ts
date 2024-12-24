import express from  'express'
import { ProductServices } from './product.service'
import { ProductController } from './product.controller';
const router=express.Router()
router.post('/create-product',ProductController.createProduct)
router.get('/get-product',ProductController.getProducts)
router.get("/single-product/:id", ProductController.getSingleProduct);
router.put("/update-products/:productId", ProductController.updateProduct);
router.delete("/delete-products/:productId", ProductController.deleteProduct);

export const ProductRoutes=router;