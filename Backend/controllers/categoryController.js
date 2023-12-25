import Category from "../models/CategoriesModel.js";
import expressAsyncHandler from "express-async-handler";

const createCategory = expressAsyncHandler(async (req, res, next) => {
  const category = await Category.create(req.body);
  if (category) {
    res.status(201).json({
      _id: category._id,
      name: category.name,
      image: category.image,
      description: category.description,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Category Data");
  }
});

const getCategories = expressAsyncHandler(async (req, res, next) => {
  const categories = await Category.find({});
  res.json(categories);
});

const getCategoryById = expressAsyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});

const updateCategory = expressAsyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    category.name = req.body.name || category.name;
    category.image = req.body.image || category.image;
    category.description = req.body.description || category.description;
    const updatedCategory = await category.save();
    res.json({
      _id: updatedCategory._id,
      name: updatedCategory.name,
      image: updatedCategory.image,
      description: updatedCategory.description,
    });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

const deleteCategory = expressAsyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    await category.remove();
    res.json({ message: "Category removed" });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

export {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
