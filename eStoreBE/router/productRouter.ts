import { Router } from "express";
import { createProduct, getSellerProduct } from "../controller/productController";

const router: any = Router();
router.route("/create-product/:sellerID").post(createProduct)
router.route("/get-seller-product/:sellerID").get(getSellerProduct)
router.route("/")
export default router;
