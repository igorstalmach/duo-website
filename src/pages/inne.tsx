import React, { ReactElement } from "react";
import styles from "../styles/Other.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import img from "@/assets/images/other/image-70.jpeg";
import img_1 from "@/assets/images/other/image-71.jpeg";
import { TextSection } from "@/components/text-section/TextSection";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import { Gallery } from "@/components/gallery/Gallery";
import { otherGallery } from "@/common/data/otherGallery";

const Inne: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Inne - Tapicerstwo Stalmach</title>
        <meta
          name="description"
          content={
            "Zajmujemy się m.in. tapicerowaniem zagłówków i foteli specjalistycznych, w tym foteli dentystycznych, optycznych, dializowych. Szyjemy również m.in. kurtyny i rekwizyty teatralne, a także sakwy do samochodów rajdowych. Skontaktuj się z nami, aby dowiedzieć się więcej."
          }
        />
        <meta property="og:title" content={"Inne - Tapicerstwo Stalmach"} />
        <meta
          property="og:description"
          content={
            "Zajmujemy się m.in. tapicerowaniem zagłówków i foteli specjalistycznych, w tym foteli dentystycznych, optycznych, dializowych. Szyjemy również m.in. kurtyny i rekwizyty teatralne, a także sakwy do samochodów rajdowych. Skontaktuj się z nami, aby dowiedzieć się więcej."
          }
        />
        <link
          rel="canonical"
          href="https://tapicerstwo-stalmach.pl/inne/"
        />
      </Head>
      <SubpageHeader header={"INNE"} />
      <SubpageSectionWrapper onRight={false}>
        <Image
          src={img}
          className={styles.image}
          alt={"Zdjęcie w kształcie dłoni"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={"NIETYPOWE ZLECENIA"}
          text={
            "Podejmujemy się usług tapicerskich przedmiotów wykraczających poza typowe meble codziennego użytku. Zajmujemy się m.in. tapicerowaniem zagłówków i foteli specjalistycznych, w tym foteli dentystycznych, optycznych, dializowych. Szyjemy również m.in. kurtyny i rekwizyty teatralne, a także sakwy do samochodów rajdowych. Skontaktuj się z nami, aby dowiedzieć się więcej."
          }
          onRight={false}
        />
        <Image
          src={img_1}
          className={styles.image}
          alt={"Zdjęcie zabezpieczenia samochodów w garażu podziemnym"}
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

export default Inne;
