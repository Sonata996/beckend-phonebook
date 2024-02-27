import "dotenv/config";
import fs from "fs/promises";
import path from "path";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import User from "../schemas/User.js";

const creatUser = async (req, res, next) => {
  const { email, password } = req.body;
  const userTransfer = await User.findOne({ email });
  console.log(req.body);
  if (userTransfer) {
    return next(HttpError(409, "Such an email is already registered"));
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const verifyCode = nanoid();

  const result = await User.create({
    ...req.body,
    password: hashPassword,
    verifyToken: verifyCode,
  });

  //   const verifyEmail = {
  //     to: email,
  //     subject: "Verify email",
  //     html: `<a target="_blank" href="${BASE_URL}/users/verify/${verifyCode}">Click to verify email</a>`,
  //   };

  //   await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: result.email,
    },
  });
};

export default {
  creatUser,
};
