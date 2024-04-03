import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";
interface childrenType {
  children: ReactNode;
}

export default function Layout({ children }: childrenType) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
