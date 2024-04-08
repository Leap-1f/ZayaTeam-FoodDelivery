import { useState, useEffect } from "react";
import dotenv from "dotenv";
import { Box } from "@mui/material";
import { getAdminLayout } from "@/components/layout/AdminLayout";
import AdminMenu from "@/components/adminDashboard/AdminMenu";
dotenv.config();
const DEPLOYMENT_DB = process.env.NEXT_PUBLIC_SERVER_URL;
console.log(DEPLOYMENT_DB);
interface CategoryDataType {
  name: String;
  _id: String;
  foodId: String;
}

interface AllFoodDataType {
  name: String;
  image: String;
  ingeredient: String;
  price: Number;
  discount: Number;
  category: String;
}
export default function AdminDashboard() {
  const [allOrders, setAllOrders] = useState<AllFoodDataType[]>([]);
  const [allCategory, setAllCategory] = useState<CategoryDataType[]>([]);
  const [name, setName] = useState<String>("");
  const [image, setImage] = useState<String>("");
  const [ingerediant, setIngerediant] = useState<String>("");
  const [price, setPrice] = useState<Number>(0);
  const [discount, setDiscount] = useState<Number>(0);
  const [category, setCategory] = useState<String>("");
  const createFoodData = async () => {
    try {
      const res = await fetch(`${DEPLOYMENT_DB}/foods/addfood`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          image: image,
          ingerediant: ingerediant,
          price: price,
          discount: discount,
          category: category,
        }),
      });
    } catch (err) {
      alert(err);
    }
  };
  const getAllCategoryData = async () => {
    try {
      const response = await fetch(`${DEPLOYMENT_DB}/categorys`);
      const data = await response.json();
      setAllCategory(data);
    } catch (err) {
      alert(err);
    }
  };
  const updateCategory = async () => {
    try {
      const response = await fetch(`${DEPLOYMENT_DB}/categorys`, {
        method: "Put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });
      const data = await response.json();
      setAllCategory(data);
    } catch (err) {
      alert(err);
    }
  };
  const getAllOrders = async () => {
    try {
      const res = await fetch(`${DEPLOYMENT_DB}/order`, { method: "GET" });
      const data = await res.json();
      setAllOrders(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getAllOrders();
    getAllCategoryData();
  }, []);
  console.log(allOrders, "order", allCategory, "category");
  return (
    <>
      <Box>
        <AdminMenu></AdminMenu>
      </Box>
    </>
  );
}
AdminDashboard.getLayout = getAdminLayout;
