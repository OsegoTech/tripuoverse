import Product from "../models/ProductsModel.js";
import asyncHandler from "express-async-handler";
import multer from "multer";
import sharp from "sharp";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Backend/public/productImages");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const resizeProductPhoto = asyncHandler(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `product-${Date.now()}.jpeg`;

  await sharp(req.file.path)
    .resize(400, 300, { fit: "fill" })
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`Backend/public/productImages/${req.file.filename}`);

  next();
});

export const upload = multer({ storage });

export const createProduct = asyncHandler(async (req, res) => {
  const { title, description, price } = new Product(req.body);
  console.log(req.file);
  const image = req.file.filename;
  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      image,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});

export const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

export const getProducts = asyncHandler(async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});
