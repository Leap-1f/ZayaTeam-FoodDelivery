import { Schema, model } from "mongoose";

<<<<<<< HEAD
export const UserSchema = model(
  "user",
  Schema({
=======
export const UserModel = model(
  "users",
  new Schema({
>>>>>>> main
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    role: {
      enum: ["USER", "ADMIN"],
    },
  })
);
