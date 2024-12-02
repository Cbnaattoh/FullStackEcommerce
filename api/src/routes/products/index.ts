import { Router } from "express";
import { listProducts,getProductById,deleteProduct,updateProduct, createProduct} from "./productsController";

const router = Router();
router.get('/', listProducts);
router.get('/:id',getProductById);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);
export default router;