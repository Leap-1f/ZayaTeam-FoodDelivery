import { ReactElement, ReactNode } from "react";
import Header from "./Header";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
export const getAdminLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
