import { Router } from "express";
import {
  addFood,
  editFood,
  getAllFoods,
  getFood,
} from "../controller/foods.js";
const foods = Router();

foods.route("/").get(getAllFoods);
foods.route("/food").get(getFood);
foods.route("/addfood").post(addFood);
foods.route("/editfood").put(editFood);
export { foods };
