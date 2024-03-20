import { Schema, model } from "mongoose";
import Joi from "joi";

const patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    token: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

export default User;
