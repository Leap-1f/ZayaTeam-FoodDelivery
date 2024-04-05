import { Schema, model } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";

export const FoodSModel = model(
  "foods",
  new Schema({
    name: String,
    image: String,
    ingeredient: String,
    price: Number,
    discount: Number,
    category: String,
  })
);
