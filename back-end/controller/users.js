import { COLLECTIONS } from "../constant/index.js";
import bcrypt from "bcrypt";
import { UserModel } from "../model/user.model.js";

export const getAllAllUsers = async (req, res) => {
  try {
    const data = await UserModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const getUserEmail = async (req, res) => {
  //forget password-d shiglana
  const { email } = req.body;
  try {
    const data = await UserModel.find({ email: email });
    console.log(data);

    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const updateUserPassword = async (req, res) => {
  const { id, newPassword } = req.body;
  try {
    const updatedUserData = await UserModel.updateOne(
      { _id: id },
      { password: newPassword }
    );
    res.send(updatedUserData);
  } catch (err) {
    console.log(err);
  }
};
export const getUserField = async (req, res) => {
  const { email, passwaord } = req.body;
  try {
    const data = UserModel.find({ email: email, passwaord: passwaord });
  } catch (err) {
    console.log(err);
  }
};
export const getUserById = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await UserModel.findById(id);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const data = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const editUserData = async (req, res) => {
  const { id, name, email, phoneNumber } = req.body;
  try {
    const data = await UserModel.updateOne(
      { _id: id },
      { name: name, email: email, phoneNumber: phoneNumber }
    );
    res.sent(data);
  } catch (err) {
    console.log(err);
  }
};
