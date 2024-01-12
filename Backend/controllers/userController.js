import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const query = req.query.new;
  const users = query
    ? await User.find().sort({ _id: -1 }).limit(2)
    : await User.find();
  // const users = await User.find({});
  res.json(users);
});

export const updateUser = asyncHandler(async (req, res, next) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 12);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "User has been deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

export const getUserById = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

export const getUserStats = asyncHandler(async (req, res, next) => {
  const today = new Date();
  const lastYear = today.setFullYear(today.setFullYear() - 1);

  try {
    const data = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: lastYear },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
      
    });
  }
});
