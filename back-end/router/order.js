import { Router } from "express";
import {
  addOrder,
  getAllOrders,
  getOrder,
  updateOrder,
} from "../controller/order.js";
const orders = Router();

orders.route("/").get(getAllOrders);
orders.route("/getorder").get(getOrder);
orders.route("/addorther").post(addOrder);
orders.route("/editorther").put(updateOrder);

export { orders };
