import { UserProfile } from "@/components/UserProfile/UserProfile";
import { getUserLayout } from "@/components/layout/UserLayout";

export default function Home() {
  return <><UserProfile/></>;
}
Home.getLayout = getUserLayout;
