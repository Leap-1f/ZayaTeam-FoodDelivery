import express from "express";
import mongoose from "mongoose";
<<<<<<< HEAD
import { UserSchema, } from "./model/user.model.js";
import { CategorySchema } from "./model/category.model.js";
import { FoodSchema } from "./model/food.model.js";
import { OrderSchema } from "./model/order.model.js";

const port = 8080;
const app = express();
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
=======
import cors from "cors";
import dotenv from "dotenv";
import { users } from "./router/users.js";
import { categorys } from "./router/categorys.js";
import { orders } from "./router/order.js";
import { foods } from "./router/foods.js";

const port = 8080;
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING || "")
>>>>>>> main
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => {
    console.log(err);
  });

<<<<<<< HEAD
app.post("/user", async (req, res) => {
  const data = await UserSchema.create({
    name: "zaya",
    email: "zazaza@gmail.com",
    password: "123456",
    phoneNumber: 11223344,
  });
  console.log(data);
  res.send("ajilla");
});

app.post("/food", async (req, res) => {
  const category = await FoodSchema.create({
    name: "Asia",

  })
})

//hicheel deer uxsen hiij uzeerei ---->

// app.get("/user", async (req, res) => {
//   const data = await UserModel.find();
//   console.log(data);
//   res.send("ajilla");
// });

// app.get("/userById", async (req, res) => {
//   const data = await UserModel.findById("660bd6c52ff00f1b7fd5b2c6");
//   console.log(data);
//   res.send("ajillaa");
// });

// app.post("/user", async (req, res) => {
//   const data = await UserModel.create(
//     { age: "222" },
//     { age: "11" },
//     { age: "33" },
//     { age: "44" }
//   );
=======
app.use("/users", users);
app.use("/categorys", categorys);
app.use("order", orders);
app.use("/foods", foods);
// app.post("/user", async (req, res) => {

//   const data = await UserSchema.create({
//     name: "zaya",
//     email: "zazaza@gmail.com",
//     password: "123456",
//     phoneNumber: 11223344,
//   });
>>>>>>> main
//   console.log(data);
//   res.send("ajilla");
// });

<<<<<<< HEAD
// app.post("/insert", async (req, res) => {
=======
// app.post("/food", async (req, res) => {
//   const category = await FoodSchema.create({
//     name: "Asia",

//   })
// })

// //hicheel deer uxsen hiij uzeerei ---->

// // app.get("/user", async (req, res) => {
// //   const data = await UserModel.find();
// //   console.log(data);
// //   res.send("ajilla");
// // });

// // app.get("/userById", async (req, res) => {
// //   const data = await UserModel.findById("660bd6c52ff00f1b7fd5b2c6");
// //   console.log(data);
// //   res.send("ajillaa");
// // });

// // app.post("/user", async (req, res) => {
// //   const data = await UserModel.create(
// //     { age: "222" },
// //     { age: "11" },
// //     { age: "33" },
// //     { age: "44" }
// //   );
// //   console.log(data);
// //   res.send("ajilla");
// // });

// // app.post("/insert", async (req, res) => {
>>>>>>> main
//   const data = await UserModel.insertMany([
//     { age: "12" },
//     { age: "13" },
//     { age: "114" },
//     { age: "15" },
//   ]);
//   console.log(data);
//   res.send("ajilla");
// });

// app.get("/findByField", async (req, res) => {
//   const data = await UserModel.find({ age: "222" });
//   console.log(data);
//   res.send("ajilsoon");
// });

// app.delete("/deleteByField", async (req, res) => {
//   const data = await UserModel.deleteOne({ age: "222" });
//   console.log(data);
//   res.send("ajilsoon");
// });

// app.delete("/deleteById", async (req, res) => {
//   const data = await UserModel.deleteOne({ age: "11" });
//   console.log(data);
//   res.send("ajilsoon");
// });

// app.put("/updateOne", async (req, res) => {
//   const data = await UserModel.updateOne({ age: "33" }, { age: "88" });
//   console.log(data);
//   res.send("ajilsoon");
// });

app.listen(port, () => {
  console.log("api ajilla");
});
