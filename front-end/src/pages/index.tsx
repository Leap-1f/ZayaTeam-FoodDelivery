import ResponsiveAppBar from "@/components/header";
import RecipeReviewCard from "@/components/MenuCards";
import OrderDetail from "@/components/OrderDetail";

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <RecipeReviewCard />
      <OrderDetail />
    </>
  );
}
