import Service from "../models/ServicesModel.js";
import asyncHandler from "express-async-handler";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Backend/public/coverImages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const createService = asyncHandler(async (req, res, next) => {
  const { name, description, price } = req.body;
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

export { createService, upload, getServices };
