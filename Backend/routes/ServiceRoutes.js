import express from "express";
import {
  createService,
  getServices,
  resizeServicePhoto,
  upload
} from "../controllers/ServiceController.js";

const router = express.Router();

router.post("/", upload.single('image'), resizeServicePhoto, createService);
router.get("/", getServices);

export default router;
