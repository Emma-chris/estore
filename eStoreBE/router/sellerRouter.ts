import { Router } from "express";
import { createSeller } from "../controller/sellerController";

const router: any = Router();

router.route("/create-seller").post(createSeller)
router.route("/")

export default router