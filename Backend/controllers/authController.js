import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const signup = asyncHandler(async (req, res) => {
//   const newUser = await User.create(req.body);
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        whatsApp: req.body.whatsApp,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });

    const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});
