import { COLLECTIONS } from "../constant/index.js";
import { CategoryModel } from "../model/category.model.js";

export const getCategory = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await CategoryModel.find(id).populate("foodId");
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};
export const getAllCategories = async (req, res) => {
  try {
    const data = await CategoryModel.find(id).populate("foodId");
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};
export const addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const data = await CategoryModel.create({ name: name });
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
};
export const editCategory = async (req, res) => {
  const { id, name } = req.body;
  try {
    const data = await CategoryModel.updateOne({ id }, { name: name });
  } catch (err) {
    res.status(400).send(err);
  }
};
