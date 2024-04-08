import { Schema, model } from "mongoose";
import { COLLECTIONS } from "../constant/index.js";

export const CategoryModel = model(
  "categories",
  new Schema({
    name: String,
    foodId: {
      type: [Schema.Types.ObjectId],
      ref: COLLECTIONS.FOOD,
    },
  })
);
