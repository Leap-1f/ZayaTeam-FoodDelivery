import { Schema, model, now } from "mongoose";
import { COLLECTIONS } from "../constant";

export const OrderSchema = model(
  "order",
  Schema({
    userId: {
      type: Schema.Types.ObjectId,
    },
    orderNumber: Number,
    foods: [
      {
        type: Schema.Types.ObjectId,
        ref: COLLECTIONS.FOOD,
      },
    ],
    totalPrice: Number,
    process: {
      type: String,
      enum: ["PROGRESS", "DELEVERED", "WAITING", "ACTIVE"],
    },
    createDate: {
      type: Date,
      default: Date.now,
      require: true,
    },
    district: String,
    khoroo: String,
    apartment: String,
  })
);
