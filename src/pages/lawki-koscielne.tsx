import React, { ReactElement } from "react";
import styles from "../styles/churchPews.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "next-i18next";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import img from "@/assets/images/churchPews/image-70.jpeg";
import img_1 from "@/assets/images/churchPews/image-71.jpeg";
import { TextSection } from "@/components/text-section/TextSection";
import { Gallery } from "@/components/gallery/Gallery";
import { churchPewsGallery } from "@/common/data/churchPewsGallery";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LawkiKoscielne: NextPageWithLayout = () => {
  const [t] = useTranslation();
  const translate = (key: string): string => t(key);

  return (
    <>
      <Head>
        <title>{t("churchPews.meta.title")}</title>
        <meta
          name="description"
          content={translate("churchPews.meta.description")}
        />
        <meta
          property="og:title"
          content={translate("churchPews.meta.title")}
        />
        <meta
          property="og:description"
          content={translate("churchPews.meta.description")}
        />
      </Head>
      <SubpageHeader header={t("churchPews.title")} />
      <SubpageSectionWrapper onRight={false}>
        <Image
          src={img}
          className={styles.image}
          alt={"Furniture"}
          priority={true}
        />
        <TextSection
          header={t("churchPews.firstSection.header")}
          text={t("churchPews.firstSection.text")}
          onRight={true}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("churchPews.secondSection.header")}
          text={t("churchPews.secondSection.text")}
          onRight={false}
        />
        <Image
          src={img_1}
          className={styles.image}
          alt={"Furniture"}
          priority={true}
        />
      </SubpageSectionWrapper>
      <Gallery src={churchPewsGallery} />
    </>
  );
};

LawkiKoscielne.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pl")),
  },
});

export default LawkiKoscielne;
