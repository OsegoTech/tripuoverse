import express from "express";
import { verifyTokenAndAdmin } from "../config/verifyToken.js";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.route("/").get(getProducts).post(verifyTokenAndAdmin, createProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(verifyTokenAndAdmin, deleteProduct)
  .put(verifyTokenAndAdmin, updateProduct);

export default router;
