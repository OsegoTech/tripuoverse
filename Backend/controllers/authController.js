import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const signup = asyncHandler(async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
