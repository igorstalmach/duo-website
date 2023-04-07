import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import { IGalleryProps } from "./IGalleryProps";
import { TextSection } from "../text-section/TextSection";
import { GalleryItem } from "./components/GalleryItem";
import FsLightbox from "fslightbox-react";

export const Gallery = (props: IGalleryProps) => {
  const [lightboxController, setLightboxController] = useState<{
    show: boolean;
    slide: number;
  }>({
    show: false,
    slide: props.src[0].id,
  });

  const openLightboxOnSlide = (slide: number) => {
    setLightboxController({
      show: !lightboxController.show,
      slide: slide,
    });
  };

  const showGallery = () => {
    return props.src.map((item, key) => {
      return (
        <GalleryItem
          src={item.src}
          alt={item.alt}
          id={item.id}
          key={key}
          changeSlide={() => openLightboxOnSlide(item.id)}
        />
      );
    });
  };

  return (
    <div className={styles.container}>
      <TextSection header={props.header} onRight={false} />
      <div className={styles.gallery}>{showGallery()}</div>
      <FsLightbox
        toggler={lightboxController.show}
        sources={[...props.src.map((item) => item.src)]}
        slide={lightboxController.slide}
      />
    </div>
  );
};
