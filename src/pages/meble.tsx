import React, { ReactElement } from "react";
import styles from "../styles/Furniture.module.scss";
import { SubpageHeader } from "@/components/subpage-header/SubpageHeader";
import { SubpageSectionWrapper } from "@/components/subpage-section-wrapper/SubpageSectionWrapper";
import { TextSection } from "@/components/text-section/TextSection";
import Image from "next/image";
import { NextPageWithLayout } from "@/pages/_app";
import { Layout } from "@/components/layout/Layout";
import Head from "next/head";
import img from "@/assets/images/furniture/image-72.jpeg";
import img_1 from "@/assets/images/furniture/image-74.jpeg";
import { Gallery } from "@/components/gallery/Gallery";
import { furnitureGallery } from "@/common/data/furnitureGallery";

const Meble: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Meble - Tapicerstwo Stalmach</title>
        <meta
          name="description"
          content={
            "Oferujemy usługi tapicerskie antyków oraz mebli współczesnych. Nasza firma specjalizuje się w renowacji i tapicerowaniu mebli, dostosowując się do indywidualnych wymagań klienta. Zapraszamy do kontaktu, aby dowiedzieć się więcej o naszej ofercie."
          }
        />
        <meta property="og:title" content={"Meble - Tapicerstwo Stalmach"} />
        <meta
          property="og:description"
          content={
            "Oferujemy usługi tapicerskie antyków oraz mebli współczesnych. Nasza firma specjalizuje się w renowacji i tapicerowaniu mebli, dostosowując się do indywidualnych wymagań klienta. Zapraszamy do kontaktu, aby dowiedzieć się więcej o naszej ofercie."
          }
        />
      </Head>
      <SubpageHeader header={"MEBLE"} />
      <SubpageSectionWrapper onRight={false}>
        <Image
          src={img_1}
          className={styles.image}
          alt={"Zdjęcie fotela"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
      </SubpageSectionWrapper>
      <SubpageSectionWrapper onRight={true}>
        <TextSection
          header={"RENOWACJA MEBLI"}
          text={
            "Oferujemy usługi tapicerskie antyków oraz mebli współczesnych. Nasza firma specjalizuje się w renowacji i tapicerowaniu mebli, dostosowując się do indywidualnych wymagań klienta. Zapraszamy do kontaktu, aby dowiedzieć się więcej o naszej ofercie."
          }
          onRight={false}
        />
        <Image
          src={img}
          className={styles.image}
          alt={"Zdjęcie kanapy"}
          priority={true}
          sizes={"(max-width: 768px) 100vw, 50vw"}
        />
        <TextSection
          header={"SZEROKA OFERTA TKANIN"}
          text={
            "W naszej ofercie znajdziesz szeroki wybór tkanin i skór, dzięki czemu możemy zaproponować różnorodne style i wzory, które idealnie dopasują się do potrzeb klienta."
          }
          onRight={false}
        />
      </SubpageSectionWrapper>
      <Gallery src={furnitureGallery} />
    </>
  );
};

Meble.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Meble;
