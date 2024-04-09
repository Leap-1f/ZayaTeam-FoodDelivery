import { getUserLayout } from "@/components/layout/UserLayout";
import { useState } from "react";
import { HomePage } from "@/components/home/HomePage";
const DEPLOYMENT_DB = process.env.NEXT_PUBLIC_SERVER_URL;
interface AllOrderType {
  userId: String;
  foods: [];
  totalPrice: Number;
  process: String;
  district: String;
  khoroo: String;
  apartment: String;
}
export default function Home() {
  const [allOrders, setAllOrders] = useState<AllOrderType>();
  const updateOrder = async () => {
    try {
      const res = await fetch(`${DEPLOYMENT_DB}/order`, {
        method: "POST",
        body: JSON.stringify({}),
      });
      const data = await res.json();
      setAllOrders(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <HomePage />
    </>
  );
}
Home.getLayout = getUserLayout;
