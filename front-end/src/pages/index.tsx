import { getUserLayout } from "@/components/layout/UserLayout";
import { useState } from "react";
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
  return <></>;
Home.getLayout = getUserLayout;
