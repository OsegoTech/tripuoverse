import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getMonthlyIncome,
  getUserOrder,
  updateOrder,
} from "../controllers/orderController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../config/verifyToken.js";

const router = express.Router();

router
  .post("/", verifyToken, createOrder)
  .get("/", verifyTokenAndAdmin, getAllOrders);
router
  .put("/:id", verifyTokenAndAdmin, updateOrder)
  .delete("/:id", verifyTokenAndAdmin, deleteOrder);

router.get("/find/:userId", verifyTokenAndAuthorization, getUserOrder);

router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;
