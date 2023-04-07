import React, { ReactElement } from "react";
import styles from "../styles/Contact.module.scss";
import { PageWrapper } from "@/components/page-wrapper/PageWrapper";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "react-i18next";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import { TextSection } from "@/components/text-section/TextSection";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";

const Kontakt: NextPageWithLayout = () => {
  const [t] = useTranslation();

  return (
    <>
      <SubpageHeader header={t("contact.title")} />
      <SubpageSectionWrapper onRight={false}>
        <div className={styles.mapWrapper}>
          <iframe
            width="100%"
            height="350"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pracownia%20Tapicerska%20%22Duo%22,%20Dworcowa%202,%20Czerwionka-Leszczyny,%20Poland+(Pracownia%20Tapicerska%20%22Duo%22)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={t("contact.firstSection.header")}
          text={t("contact.firstSection.text")}
          onRight={false}
        />
      </SubpageSectionWrapper>
    </>
  );
};

Kontakt.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Kontakt;
