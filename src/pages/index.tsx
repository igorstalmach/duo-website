import React, { ReactElement } from "react";
import styles from "../styles/Home.module.scss";
import { useTranslation } from "next-i18next";
import { TextSection } from "@/components/text-section/TextSection";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
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

  return (
    <>
      <Head>
        <title>Tapicerstwo Stalmach</title>
      </Head>
      <HomeWelcome />
      <SubpageSectionWrapper onRight={false}>
        <Image src={img} className={styles.image} alt={"Furniture"} />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("home.firstSection.header")}
          text={t("home.firstSection.text")}
          onRight={false}
        />
      </SubpageSectionWrapper>
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
