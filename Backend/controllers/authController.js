import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
// import AppError from "../utils/appError.js";

const signToken = (id, isAdmin) => {
  return jwt.sign({ id , isAdmin}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signup = asyncHandler(async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      whatsApp: req.body.whatsApp,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id, newUser.isAdmin);
    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  //   1) Check if email and password exist
  if (!email || !password) {
    // return next(new AppError("Please provide email and password!", 400));
    res.status(400).json({
      status: "fail",
      message: "Please provide email and password!",
    });
  }

  // 2.) check if user exixts and password is correct
  const user = await User.findOne({ email }).select("+password");
  // const correct = await user.correctPassword(password, user.password);
  if (!user || !(await user.correctPassword(password, user.password))) {
    // return next(new AppError("Incorrect email or password", 401));
    res.status(401).json({
      status: "fail",
      message: "Incorrect email or password",
    });
  }

  // 3.) If everything is okay, send token to client
  const token = signToken(user._id, user.isAdmin);
  res.status(200).json({
    status: "success",
    token,
    user,
  });
});
