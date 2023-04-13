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
  const translate = (key: string): string => t(key);

  return (
    <>
      <Head>
        <title>{t("furniture.meta.title")}</title>
        <meta
          name="description"
          content={translate("furniture.meta.description")}
        />
        <meta property="og:title" content={translate("furniture.meta.title")} />
        <meta
          property="og:description"
          content={translate("furniture.meta.description")}
        />
      </Head>
      <SubpageHeader header={t("furniture.title")} />
      <SubpageSectionWrapper onRight={false}>
        <Image
          src={img_1}
          className={styles.image}
          alt={"Furniture"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("furniture.secondSection.header")}
          text={t("furniture.secondSection.text")}
          onRight={false}
        />
        <Image
          src={img}
          className={styles.image}
          alt={"Furniture"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
        <TextSection
          header={t("furniture.firstSection.header")}
          text={t("furniture.firstSection.text")}
          onRight={false}
        />
      </SubpageSectionWrapper>
      <Gallery src={furnitureGallery} />
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
