import Service from "../models/ServicesModel.js";
import asyncHandler from "express-async-handler";
import multer from "multer";
import sharp from "sharp";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Backend/public/coverImages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const resizeServicePhoto = asyncHandler(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `service-${Date.now()}.jpeg`;

  await sharp(req.file.path)
    .resize(400, 300, { fit: "fill" })
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`Backend/public/serviceImages/${req.file.filename}`);

  next();
});

const upload = multer({ storage });

const createService = asyncHandler(async (req, res, next) => {
  const { name, description, price } = req.body;
  console.log(req.file);
  const image = req.file.filename;
  try {
    const service = await Service.create({
      name,
      description,
      price,
      image,
    });
    res.status(201).json({
      status: "success",
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    res.status(400);
    console.log(error.message);
    throw new Error("Invalid service data");
  }
});

const getServices = asyncHandler(async (req, res, next) => {
  const services = await Service.find({});
  res.status(200).json(services);
});

export { createService, upload, getServices, resizeServicePhoto };
