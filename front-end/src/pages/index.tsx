<<<<<<< HEAD
import AdminSideBar from "@/components/adminDashboard/AdminMenu";
=======
import { getUserLayout } from "@/components/layout/UserLayout";
>>>>>>> a9d210c (admindashboard yznlav)

export default function Home() {
  return (
    <>
      <AdminSideBar />
    </>
  );
}
Home.getLayout = getUserLayout;
