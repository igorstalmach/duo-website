import React, { ReactElement } from "react";
import styles from "../styles/Home.module.scss";
import { useTranslation } from "react-i18next";
import img from "../assets/images/images/img.png";
import img_1 from "../assets/images/images/img_1.png";
import img_2 from "../assets/images/images/img_2.png";
import { TextSection } from "@/components/text-section/TextSection";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import { HomeWelcome } from "@/components/HomeWelcome/HomeWelcome";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";

const Home: NextPageWithLayout = () => {
  const [t] = useTranslation();

  return (
    <>
      <HomeWelcome />
      <SubpageSectionWrapper onRight={false}>
        <Image src={img} className={styles.image} alt={"Furniture"} />
        <TextSection
          header={t("home.firstSection.header")}
          text={t("home.firstSection.text")}
          onRight={true}
        />
        <Image src={img_1} className={styles.image} alt={"Furniture"} />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("home.secondSection.header")}
          text={t("home.secondSection.text")}
          onRight={false}
        />
        <Image src={img_2} className={styles.image} alt={"Furniture"} />
        <TextSection
          header={t("home.thirdSection.header")}
          text={t("home.thirdSection.text")}
          onRight={false}
        />
      </SubpageSectionWrapper>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
