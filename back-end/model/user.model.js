import { Schema, model } from "mongoose";

export const UserSchema = model(
  "user",
  Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    role: {
      enum: ["USER", "ADMIN"],
    },
  })
);
