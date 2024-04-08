import { Router } from "express";
import {
  addUser,
  editUserData,
  getAllAllUsers,
  getUserField,
} from "../controller/users.js";
const users = Router();

users.route("/").get(getAllAllUsers);
users.route("/login").post(getUserField);
users.route("/adduser").post(addUser);
users.route("/edituser").put(editUserData);

export { users };
