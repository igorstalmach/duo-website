import React, { ReactElement } from "react";
import styles from "../styles/Home.module.scss";
import { TextSection } from "@/components/text-section/TextSection";
import { HomeWelcome } from "@/components/home-welcome/HomeWelcome";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import img from "@/assets/images/home/image-74.jpeg";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Strona główna - Tapicerstwo Stalmach</title>
        <meta
          name="description"
          content={
            "Nasza pracownia tapicerska, działająca od 1992 roku, oferuje szeroki zakres usług związanych z tapicerowaniem różnego rodzaju mebli, w tym ławek kościelnych, antyków, mebli codziennego użytku oraz foteli specjalistycznych. Skontaktuj się z nami, aby dowiedzieć się więcej."
          }
        />
        <meta
          property="og:title"
          content={"Strona główna - Tapicerstwo Stalmach"}
        />
        <meta
          property="og:description"
          content={
            "Nasza pracownia tapicerska, działająca od 1992 roku, oferuje szeroki zakres usług związanych z tapicerowaniem różnego rodzaju mebli, w tym ławek kościelnych, antyków, mebli codziennego użytku oraz foteli specjalistycznych. Skontaktuj się z nami, aby dowiedzieć się więcej."
          }
        />
        <link rel="canonical" href="https://tapicerstwo-stalmach.pl/" />
      </Head>
      <HomeWelcome title={"PRACOWNIA TAPICERSKA"} subtitle={'Firma "Duo"'} />
      <div className={styles.wrapper}>
        <TextSection
          header={"O NAS"}
          text={
            "Nasza pracownia tapicerska, działająca od 1992 roku, oferuje szeroki zakres usług związanych z tapicerowaniem różnego rodzaju mebli, w tym ławek kościelnych, antyków, mebli codziennego użytku oraz foteli specjalistycznych. Zapraszamy do zapoznania się z naszą ofertą w poszczególnych zakładkach."
          }
          onRight={false}
        />
        <Image
          src={img}
          className={styles.image}
          alt={"Zdjęcie fotela"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
