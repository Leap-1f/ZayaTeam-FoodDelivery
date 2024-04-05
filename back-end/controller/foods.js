import { FoodSModel } from "../model/food.model.js";
import { CategoryModel } from "../model/category.model.js";
import { COLLECTIONS } from "../constant/index.js";

export const getAllFoods = async (req, res) => {
  try {
    const data = await FoodSModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const getFood = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await FoodModel.findById(id);
    console.log(data);

    //     res.send(data);
    res.send("food ajillaa");
  } catch (err) {
    console.log(err);
  }
};

export const addFood = async (req, res) => {
  const { name, image, ingeredient, price, discount, category } = req.body;
  try {
    const data = await FoodSModel.create({
      name: name,
      image: image,
      ingeredient: ingeredient,
      price: price,
      discount: discount,
      category: category,
    });
    res.send(data);
    const { _id } = data;
    console.log(_id);
    console.log(category);
    await CategoryModel.findOneAndUpdate(
      { name: data.category },

      {
        $push: {
          foodId: _id,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};
export const editFood = async (req, res) => {
  const { name, image, ingeredient, price, discount, category } = req.body;
  try {
    const data = await FoodSModel.updateOne({
      name: name,
      image: image,
      ingeredient: ingeredient,
      price: price,
      discount: discount,
      category: category,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
