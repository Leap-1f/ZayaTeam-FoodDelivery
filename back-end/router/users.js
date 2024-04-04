import { Router } from "express";
import { addUser, editUserData, getAllAllUsers } from "../controller/users.js";
const users = Router();

users.route("/").get(getAllAllUsers);
users.route("/adduser").post(addUser);
users.route("/edituser").put(editUserData);

export { users };
