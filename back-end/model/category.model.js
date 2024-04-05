import { Schema, model } from "mongoose";
<<<<<<< HEAD
import { COLLECTIONS } from "../constant";

export const CategorySchema = model(
  "category",
  Schema({
=======
import { COLLECTIONS } from "../constant/index.js";

export const CategoryModel = model(
  "categorys",
  new Schema({
>>>>>>> main
    name: String,
    foodId: {
      type: [Schema.Types.ObjectId],
      ref: COLLECTIONS.FOOD,
    },
  })
);
