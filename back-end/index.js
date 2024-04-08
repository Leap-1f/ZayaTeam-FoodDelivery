import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { users } from "./router/users.js";
import { categories } from "./router/categories.js";
import { orders } from "./router/order.js";
import { foods } from "./router/foods.js";

const port = 8080;
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING || "")
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => {
    console.log(err);
  });

app.use("/users", users);
app.use("/categories", categories);
app.use("/order", orders);
app.use("/foods", foods);

app.listen(port, () => {
  console.log("api ajilla");
});
