import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  getUserStats,
  updateUser,
} from "../controllers/userController.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../config/verifyToken.js";

const router = express.Router();

router.get("/", verifyTokenAndAdmin, getAllUsers);
router
  .route("/:id")
  .put(verifyTokenAndAuthorization, updateUser)
  .delete(verifyTokenAndAdmin, deleteUser)
  .get(verifyTokenAndAdmin, getUserById);

  router.get("/stats", verifyTokenAndAdmin, getUserStats)

export default router;
