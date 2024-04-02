import { Schema, model } from "mongoose";
import { COLLECTIONS } from "../constant";

export const FoodSchema = model(
  "food",
  Schema({
    name: String,
    image: String,
    ingeredient: String,
    price: Number,
  })
);
