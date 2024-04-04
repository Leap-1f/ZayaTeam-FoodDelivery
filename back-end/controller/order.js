import { COLLECTIONS } from "../constant/index.js";
import { OrderModel } from "../model/order.model.js";

export const getAllOrders = async (req, res) => {
  try {
    const data = await OrderModel.find(COLLECTIONS.ORDER);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const getOrder = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await OrderModel.findById(id);

    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const addOrder = async (req, res) => {
  const {
    userId,
    orderNumber,
    FoodsArray,
    totalPrice,
    process,
    createDate,
    district,
    Khoroo,
    apartment,
  } = req.body;
  try {
    const data = await OrderModel.create({
      userid: userId,
      orderNumber: orderNumber,
      FoodsArray: FoodsArray,
      totalPrice: totalPrice,
      process: process,
      createDate: createDate,
      district: district,
      Khoroo: Khoroo,
      apartment: apartment,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const updateOrder = async (req, res) => {
  const { id, name } = req.body;
  try {
    const data = await OrderModel.updateOne({ id }, { name: name });
  } catch (err) {
    console.log(err);
  }
};
