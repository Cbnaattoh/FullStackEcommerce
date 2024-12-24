import { Router } from "express";
import { listProducts,getProductById,deleteProduct,updateProduct, createProduct} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import { createProductSchema, updateProductSchema} from "../../db/productsSchema";
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware";



const router = Router();
router.get('/', listProducts);
router.get('/:id',getProductById);
router.post('/', 
    verifyToken,
     verifySeller,
     validateData(createProductSchema), createProduct);
router.delete('/:id', verifyToken,
    verifySeller, deleteProduct);
router.put('/:id',  verifyToken,
    verifySeller,validateData(updateProductSchema), updateProduct);
export default router;