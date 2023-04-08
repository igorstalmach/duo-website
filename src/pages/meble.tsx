import React, { ReactElement } from "react";
import styles from "../styles/Furniture.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "next-i18next";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import { TextSection } from "@/components/text-section/TextSection";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import img from "@/assets/images/furniture/image-72.jpeg";
import img_1 from "@/assets/images/furniture/image-74.jpeg";
import { Gallery } from "@/components/gallery/Gallery";
import { furnitureGallery } from "@/common/data/furnitureGallery";

const Meble: NextPageWithLayout = () => {
  const [t] = useTranslation();

  return (
    <>
      <Head>
        <title>Meble - Tapicerstwo Stalmach</title>
      </Head>
      <SubpageHeader header={t("furniture.title")} />
      <SubpageSectionWrapper onRight={false}>
        <Image src={img_1} className={styles.image} alt={"Furniture"} />
        <TextSection
          header={t("furniture.firstSection.header")}
          text={t("furniture.firstSection.text")}
          onRight={true}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("furniture.secondSection.header")}
          text={t("furniture.secondSection.text")}
          onRight={false}
        />
        <Image src={img} className={styles.image} alt={"Furniture"} />
      </SubpageSectionWrapper>
      <Gallery src={furnitureGallery} header={t("furniture.gallery")} />
    </>
  );
};

Meble.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pl")),
  },
});

export default Meble;
