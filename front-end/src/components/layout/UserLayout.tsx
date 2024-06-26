import { ReactElement, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export const getUserLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
