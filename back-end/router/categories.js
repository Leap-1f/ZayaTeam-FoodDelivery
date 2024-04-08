import { Router } from "express";
import {
  addCategory,
  editCategory,
  getAllCategories,
  getCategory,
} from "../controller/categories.js";
const categories = Router();

categories.route("/").get(getAllCategories);
categories.route("/getcategory").get(getCategory);
categories.route("/addcategory").post(addCategory);
categories.route("/editcategory").put(editCategory);

export { categories };
