import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
