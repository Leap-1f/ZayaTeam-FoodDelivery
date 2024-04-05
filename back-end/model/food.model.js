import { Schema, model } from "mongoose";
<<<<<<< HEAD
import { COLLECTIONS } from "../constant";

export const FoodSchema = model(
  "food",
  Schema({
=======
import { COLLECTIONS } from "../constant/index.js";

export const FoodSModel = model(
  "foods",
  new Schema({
>>>>>>> main
    name: String,
    image: String,
    ingeredient: String,
    price: Number,
    discount: Number,
<<<<<<< HEAD
=======
    category: String,
>>>>>>> main
  })
);
