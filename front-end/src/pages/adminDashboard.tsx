import { useState, useEffect } from "react";
import dotenv from "dotenv";
import { Box } from "@mui/material";
import { getAdminLayout } from "@/components/layout/AdminLayout";
dotenv.config();
const DEPLOYMENT_DB = process.env.SERVER_URL;
console.log(DEPLOYMENT_DB);

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
      const res = await fetch(
        `https://fooddelivery-back-end.vercel.app/order`,
        { method: "GET" }
      );
      const data = await res.json();
      setAllOrders(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllOrders();
  }, []);
  console.log(allOrders);
  return (
    <>
      <Box></Box>
    </>
  );
}
AdminDashboard.getLayout = getAdminLayout;
