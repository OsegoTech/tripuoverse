import express from "express";
import {
  createService,
  getServices,
  upload
} from "../controllers/ServiceController.js";

const router = express.Router();

router.post("/", upload.single('image'), createService);
router.get("/", getServices);

export default router;
