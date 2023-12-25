import express from "express";
import {
  createCategory,
  getCategories,
  deleteCategory,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/", getCategories).post("/", createCategory);
router
  .get("/:id", getCategoryById)
  .patch("/:id", updateCategory)
  .delete("/:id", deleteCategory);
export default router;
