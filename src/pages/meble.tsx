import React from "react";
import styles from "../styles/Furniture.module.scss";
import { PageWrapper } from "@/components/page-wrapper/PageWrapper";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "react-i18next";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import img from "../assets/images/images/img.png";
import { TextSection } from "@/components/text-section/TextSection";
import img_2 from "../assets/images/images/img_2.png";
import Image from "next/image";

const Meble = () => {
  const [t] = useTranslation();

  return (
    <PageWrapper>
      <SubpageHeader header={t("furniture.title")} />
      <SubpageSectionWrapper onRight={false}>
        <Image src={img} className={styles.image} alt={"Furniture"} />
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
        <Image src={img_2} className={styles.image} alt={"Furniture"} />
      </SubpageSectionWrapper>
    </PageWrapper>
  );
};

export default Meble;
