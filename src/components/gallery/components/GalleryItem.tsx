import React from "react";
import styles from "./GalleryItem.module.scss";
import { IGalleryItemProps } from "./IGalleryItemProps";
import { IconPlus } from "@/assets/icons/IconPlus";
import Image from "next/image";

export const GalleryItem = (props: IGalleryItemProps) => {
  return (
    <div className={styles.container} onClick={props.changeSlide}>
      <Image
        src={props.src}
        alt={props.alt}
        className={styles.image}
        sizes={"20vw"}
      />
      <div className={styles.iconContainer}>
        <IconPlus />
      </div>
    </div>
  );
};
