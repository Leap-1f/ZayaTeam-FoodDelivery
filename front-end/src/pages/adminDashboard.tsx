import { useState, useEffect } from "react";
import dotenv from "dotenv";
import { Box } from "@mui/material";
dotenv.config();
const DEPLOYMENT_DB = process.env.DEPLOYMENT_URL;
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
  const getAllOrders = async () => {
    try {
      const res = await fetch(`https://fooddelivery-back-end.vercel.app/order`);
      const data = await res.json();
      setAllOrders(data);
      console.log(allOrders);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <>
      <Box>sadasdas</Box>
    </>
  );
}
