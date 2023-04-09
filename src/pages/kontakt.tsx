import React, { ReactElement } from "react";
import styles from "../styles/Contact.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { useTranslation } from "next-i18next";
import { TextSection } from "@/components/text-section/TextSection";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ContactInfo } from "@/components/contact-info/ContactInfo";

const Kontakt: NextPageWithLayout = () => {
  const [t] = useTranslation();

  return (
    <>
      <Head>
        <title>Kontakt - Tapicerstwo Stalmach</title>
      </Head>
      <SubpageHeader header={t("contact.title")} />
      <div className={styles.leftWrapper}>
        <div className={styles.mapWrapper}>
          <iframe
            width="100%"
            height="350"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pracownia%20Tapicerska%20%22Duo%22,%20Dworcowa%202,%20Czerwionka-Leszczyny,%20Poland+(Pracownia%20Tapicerska%20%22Duo%22)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.infoWrapper}>
          <TextSection header={t("contact.header")} onRight={false} />
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

Kontakt.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pl")),
  },
});

export default Kontakt;
