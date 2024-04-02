import express from "express";
import mongoose from "mongoose";
import { UserSchema } from "./model/user.model.js";

const port = 8080;
const app = express();
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => {
    console.log(err);
  });

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
//   console.log(data);
//   res.send("ajilla");
// });

// app.post("/insert", async (req, res) => {
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
