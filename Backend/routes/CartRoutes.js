import express from "express";
import {
  createCart,
  deleteCart,
  getUserCart,
  updateCart,
  getAllCarts,
} from "../controllers/cartController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../config/verifyToken.js";

const router = express.Router();

router
  .post("/", verifyToken, createCart)
  .get("/", verifyTokenAndAdmin, getAllCarts);
router
  .route("/:id")
  .put(verifyTokenAndAuthorization, updateCart)
  .delete(verifyTokenAndAuthorization, deleteCart);
router.get("/find/:userId", verifyTokenAndAuthorization, getUserCart);

export default router;
