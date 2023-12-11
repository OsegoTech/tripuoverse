import Service from "../models/ServicesModel.js";
import asyncHandler from "express-async-handler";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
// import sharp from "sharp";

// const multerStorage = multer.memoryStorage();

// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.startsWith("image")) cb(null, true);
//   else cb(new Error("Not an image! Please upload only images."), false);
// };

// const upload = multer({
//   storage: multerStorage,
//   fileFilter: multerFilter,
// });

// const uploadServiceImages = upload.single("image");
// const resizeServiceImages = asyncHandler(async (req, res, next) => {
//   if (!req.files) return next();

//   req.body.images = [];

//   await Promise.all(
//     req.files.map(async (file, i) => {
//       const filename = `service-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;

//       await sharp(file.buffer)
//         .resize(2000, 1333)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(`public/img/services/${filename}`);

//       req.body.images.push(filename);
//     })
//   );

//   next();
// });

const createService = asyncHandler(async (req, res, next) => {
  const service = await Service.create(req.body);
  const imagePath = req.file ? 'uploads/' + req.file.filename : null;
  console.log('imagePath', imagePath);
  console.log(req.body);
  if (service) {
    res.status(201).json({
      _id: service._id,
      name: service.name,
      description: service.description,
      provider: service.provider,
      price: service.price,
      category: service.category,
      image: imagePath,
      rating: service.rating,
      numReviews: service.numReviews,
    });
  } else {
    res.status(400);
    throw new Error("Invalid service data");
  }
});

const getServices = asyncHandler(async (req, res, next) => {
  const services = await Service.find({});
  res.status(200).json(services);
});

export { createService, upload, getServices };
