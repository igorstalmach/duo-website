import React, { ReactElement } from "react";
import styles from "../styles/Other.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "react-i18next";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import img from "@/assets/images/other/image-70.jpeg";
import img_1 from "@/assets/images/other/image-71.jpeg";
import { TextSection } from "@/components/text-section/TextSection";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Gallery } from "@/components/gallery/Gallery";
import { otherGallery } from "@/common/data/otherGallery";

const Inne: NextPageWithLayout = () => {
  const [t] = useTranslation();
  const translate = (key: string): string => t(key);

  return (
    <>
      <Head>
        <title>{t("other.meta.title")}</title>
        <meta
          name="description"
          content={translate("other.meta.description")}
        />
        <meta property="og:title" content={translate("other.meta.title")} />
        <meta
          property="og:description"
          content={translate("other.meta.description")}
        />
      </Head>
      <SubpageHeader header={t("other.title")} />
      <SubpageSectionWrapper onRight={false}>
        <Image
          src={img}
          className={styles.image}
          alt={"Furniture"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("other.firstSection.header")}
          text={t("other.firstSection.text")}
          onRight={false}
        />
        <Image
          src={img_1}
          className={styles.image}
          alt={"Furniture"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
      </SubpageSectionWrapper>
      <Gallery src={otherGallery} />
    </>
  );
};

Inne.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pl")),
  },
});

export default Inne;
