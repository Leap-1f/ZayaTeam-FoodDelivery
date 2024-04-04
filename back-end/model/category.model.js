import { Schema, model } from "mongoose";
import { COLLECTIONS } from "../constant";

export const CategorySchema = model(
  "category",
  Schema({
    name: String,
    foodId: {
      type: [Schema.Types.ObjectId],
      ref: COLLECTIONS.FOOD,
    },
  })
);
