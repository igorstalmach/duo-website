import React from "react";
import styles from "../styles/Other.module.scss";
import { PageWrapper } from "@/components/page-wrapper/PageWrapper";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "react-i18next";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import img from "../assets/images/images/img.png";
import { TextSection } from "@/components/text-section/TextSection";
import img_2 from "../assets/images/images/img_2.png";
import Image from "next/image";

const Inne = () => {
  const [t] = useTranslation();

  return (
    <PageWrapper>
      <SubpageHeader header={t("other.title")} />
      <SubpageSectionWrapper onRight={false}>
        <Image src={img} className={styles.image} alt={"Furniture"} />
        <TextSection
          header={t("other.firstSection.header")}
          text={t("other.firstSection.text")}
          onRight={true}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("other.secondSection.header")}
          text={t("other.secondSection.text")}
          onRight={false}
        />
        <Image src={img_2} className={styles.image} alt={"Furniture"} />
      </SubpageSectionWrapper>
    </PageWrapper>
  );
};

export default Inne;
