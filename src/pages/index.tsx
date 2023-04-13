import React, { ReactElement } from "react";
import styles from "../styles/Home.module.scss";
import { useTranslation } from "next-i18next";
import { TextSection } from "@/components/text-section/TextSection";
import { HomeWelcome } from "@/components/home-welcome/HomeWelcome";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps } from "next";
import img from "@/assets/images/home/image-74.jpeg";

const Home: NextPageWithLayout = () => {
  const [t] = useTranslation();
  const translate = (key: string): string => t(key);

  return (
    <>
      <Head>
        <title>{t("home.meta.title")}</title>
        <meta name="description" content={translate("home.meta.description")} />
        <meta property="og:title" content={translate("home.meta.title")} />
        <meta
          property="og:description"
          content={translate("home.meta.description")}
        />
      </Head>
      <HomeWelcome />
      <div className={styles.wrapper}>
        <TextSection
          header={t("home.firstSection.header")}
          text={t("home.firstSection.text")}
          onRight={false}
        />
        <Image
          src={img}
          className={styles.image}
          alt={"Furniture"}
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pl")),
  },
});

export default Home;
