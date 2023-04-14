import React, { ReactElement } from "react";
import styles from "../styles/Contact.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { TextSection } from "@/components/text-section/TextSection";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { ContactInfo } from "@/components/contact-info/ContactInfo";

const Kontakt: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Kontakt - Tapicerstwo Stalmach</title>
        <meta
          name="description"
          content={
            "Nasza pracownia tapicerska, działająca od 1992 roku, oferuje szeroki zakres usług związanych z tapicerowaniem różnego rodzaju mebli, w tym ławek kościelnych, antyków, mebli codziennego użytku oraz foteli specjalistycznych. Skontaktuj się z nami, aby dowiedzieć się więcej."
          }
        />
        <meta property="og:title" content={"Kontakt - Tapicerstwo Stalmach"} />
        <meta
          property="og:description"
          content={
            "Nasza pracownia tapicerska, działająca od 1992 roku, oferuje szeroki zakres usług związanych z tapicerowaniem różnego rodzaju mebli, w tym ławek kościelnych, antyków, mebli codziennego użytku oraz foteli specjalistycznych. Skontaktuj się z nami, aby dowiedzieć się więcej."
          }
        />
      </Head>
      <SubpageHeader header={"KONTAKT"} />
      <div className={styles.leftWrapper}>
        <div className={styles.mapWrapper}>
          <iframe
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pracownia%20Tapicerska%20%22Duo%22,%20Dworcowa%202,%20Czerwionka-Leszczyny,%20Poland+(Pracownia%20Tapicerska%20%22Duo%22)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.infoWrapper}>
          <TextSection header={"SKONTAKTUJ SIĘ Z NAMI"} onRight={false} />
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

Kontakt.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Kontakt;
