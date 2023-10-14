import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({});
  res.json(users);
});
