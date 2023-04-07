import React, { ReactElement } from "react";
import styles from "../styles/ChurchBenches.module.scss";
import { PageWrapper } from "@/components/page-wrapper/PageWrapper";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "react-i18next";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import img from "../assets/images/images/img.png";
import { TextSection } from "@/components/text-section/TextSection";
import img_2 from "../assets/images/images/img_2.png";
import { Gallery } from "@/components/gallery/Gallery";
import { churchBenchGallery } from "@/common/data/churchBenchGallery";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";

const LawkiKoscielne: NextPageWithLayout = () => {
  const [t] = useTranslation();

  return (
    <>
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
        <Image src={img_2} className={styles.image} alt={"Furniture"} />
      </SubpageSectionWrapper>
      <Gallery src={churchBenchGallery} header={t("churchBenches.gallery")} />
    </>
  );
};

LawkiKoscielne.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LawkiKoscielne;
