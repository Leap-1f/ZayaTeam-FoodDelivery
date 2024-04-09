import FoodMenu from "@/components/FoodMenu/FoodMenu";
import { getUserLayout } from "@/components/layout/UserLayout";

export default function Menu() {
  return (
    <>
      <FoodMenu />
    </>
  );
}

Menu.getLayout = getUserLayout;
