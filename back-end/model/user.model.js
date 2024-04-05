import { Schema, model } from "mongoose";

export const UserModel = model(
  "users",
  new Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    role: {
      enum: ["USER", "ADMIN"],
    },
  })
);
