import React, { ReactElement } from "react";
import Head from "next/head";
import { HomeWelcome } from "@/components/home-welcome/HomeWelcome";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";

const Custom500: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>500 - Tapicerstwo Stalmach</title>
        <meta name="robots" content="noindex" />
      </Head>
      <HomeWelcome title={"500"} subtitle={"Błąd serwera"} />
    </>
  );
};

Custom500.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Custom500;
