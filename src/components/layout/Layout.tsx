import React from "react";
import { ILayoutProps } from "@/components/layout/ILayoutProps";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageWrapper } from "@/components/page-wrapper/PageWrapper";
import "@/common/utils/i18n";

export const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Navbar />
      <PageWrapper>{props.children}</PageWrapper>
      <Footer />
    </>
  );
};
