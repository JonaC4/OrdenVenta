
import { Router } from "express";
import {getProducts,deleteProductById,getProductById,createNewProduct} from "../controllers/products.controller";
const router = Router()
router.get('/products',getProducts);
router.delete('/products/:idProducto',deleteProductById);
router.get('/products/:idProducto',getProductById);
router.post('/products',createNewProduct);
export default router









