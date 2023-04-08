import React from "react";
import { ILayoutProps } from "@/components/layout/ILayoutProps";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageWrapper } from "@/components/page-wrapper/PageWrapper";

export const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Navbar />
      <PageWrapper>{props.children}</PageWrapper>
      <Footer />
    </>
  );
};
