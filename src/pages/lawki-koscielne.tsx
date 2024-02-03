import React, { ReactElement } from "react";
import styles from "../styles/churchPews.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import img from "@/assets/images/churchPews/image-70.jpeg";
import img_1 from "@/assets/images/churchPews/image-71.jpeg";
import { TextSection } from "@/components/text-section/TextSection";
import { Gallery } from "@/components/gallery/Gallery";
import { churchPewsGallery } from "@/common/data/churchPewsGallery";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";

const LawkiKoscielne: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Ławki kościelne - Tapicerstwo Stalmach</title>
        <meta
          name="description"
          content={
            "Nasza firma opracowała nieinwazyjną metodę tapicerowania ławek kościelnych. Rozwiązanie zapewnia trwałą i efektywną tapicerkę ławek, jednocześnie nie naruszając ich powierzchni. Skontaktuj się z nami, aby umówić się na wizytę i uzyskać bezpłatną wycenę."
          }
        />
        <meta
          property="og:title"
          content={"Ławki kościelne - Tapicerstwo Stalmach"}
        />
        <meta
          property="og:description"
          content={
            "Nasza firma opracowała nieinwazyjną metodę tapicerowania ławek kościelnych. Rozwiązanie zapewnia trwałą i efektywną tapicerkę ławek, jednocześnie nie naruszając ich powierzchni. Skontaktuj się z nami, aby umówić się na wizytę i uzyskać bezpłatną wycenę."
          }
        />
        <link
          rel="canonical"
          href="https://tapicerstwo-stalmach.pl/lawki-koscielne/"
        />
      </Head>
      <SubpageHeader header={"ŁAWKI KOŚCIELNE"} />
      <SubpageSectionWrapper onRight={false}>
        <Image
          src={img}
          className={styles.image}
          alt={"Zdjęcie ławek kościelnych"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
        <TextSection
          header={"BEZPŁATNA WYCENA"}
          text={
            "Zapewniamy bezpłatną wycenę tapicerowania ławek w kościołach na terenie całego kraju. To doskonała okazja, aby zapoznać się z próbnikami materiałów oraz przykładowymi pokryciami ławek, i wybrać najlepsze rozwiązanie dla każdego kościoła. Skontaktuj się z nami, aby umówić się na wizytę i uzyskać bezpłatną wycenę."
          }
          onRight={true}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={"UNIKATOWA METODA"}
          text={
            "Nasza firma opracowała nieinwazyjną metodę tapicerowania ławek kościelnych. Rozwiązanie zapewnia trwałą i efektywną tapicerkę ławek, jednocześnie nie naruszając ich powierzchni. Nasza metoda wyróżnia się na tle innych sposobów dostępnych na rynku, ponieważ nie powoduje przesuwania się ani ściągania pokrycia z ławki podczas jej użytkowania. Skontaktuj się z nami, aby dowiedzieć się więcej o tapicerowaniu ławek kościelnych."
          }
          onRight={false}
        />
        <Image
          src={img_1}
          className={styles.image}
          alt={"Zdjęcie ławki kościelnej"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
      </SubpageSectionWrapper>
      <Gallery src={churchPewsGallery} />
    </>
  );
};

LawkiKoscielne.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LawkiKoscielne;
