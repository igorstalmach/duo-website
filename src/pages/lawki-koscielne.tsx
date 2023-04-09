import React, { ReactElement } from "react";
import styles from "../styles/ChurchBenches.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "next-i18next";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import img from "@/assets/images/churchBenches/image-70.jpeg";
import img_1 from "@/assets/images/churchBenches/image-71.jpeg";
import { TextSection } from "@/components/text-section/TextSection";
import { Gallery } from "@/components/gallery/Gallery";
import { churchBenchGallery } from "@/common/data/churchBenchGallery";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LawkiKoscielne: NextPageWithLayout = () => {
  const [t] = useTranslation();

  return (
    <>
      <Head>
        <title>Ławki kościelne - Tapicerstwo Stalmach</title>
      </Head>
      <SubpageHeader header={t("churchBenches.title")} />
      <SubpageSectionWrapper onRight={false}>
        <Image src={img} className={styles.image} alt={"Furniture"} />
        <TextSection
          header={t("churchBenches.firstSection.header")}
          text={t("churchBenches.firstSection.text")}
          onRight={true}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("churchBenches.secondSection.header")}
          text={t("churchBenches.secondSection.text")}
          onRight={false}
        />
        <Image src={img_1} className={styles.image} alt={"Furniture"} />
      </SubpageSectionWrapper>
      <Gallery src={churchBenchGallery} />
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
