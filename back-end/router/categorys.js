import { Router } from "express";
import {
  addCategory,
  editCategory,
  getAllCategorys,
  getCategory,
} from "../controller/categorys.js";
const categorys = Router();

categorys.route("/").get(getAllCategorys);
categorys.route("/getcategory").get(getCategory);
categorys.route("/addcategory").post(addCategory);
categorys.route("/editcategory").put(editCategory);

export { categorys };
