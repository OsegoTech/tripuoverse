import express from "express";
import {
  createService,
  uploadServiceImages,
  resizeServiceImages,
  getServices,
} from "../controllers/ServiceController.js";

const router = express.Router();

router.post("/", uploadServiceImages, resizeServiceImages, createService);
router.get("/", getServices)

export default router;
