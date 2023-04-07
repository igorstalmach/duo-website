import React from "react";
import styles from "./GalleryItem.module.scss";
import { IGalleryItemProps } from "./IGalleryItemProps";
import { IconPlus } from "../../../assets/icons/IconPlus";

export const GalleryItem = (props: IGalleryItemProps) => {
  return (
    <div className={styles.container} onClick={props.changeSlide}>
      <img src={String(props.src)} alt={props.alt} className={styles.image} />
      <div className={styles.iconContainer}>
        <IconPlus />
      </div>
    </div>
  );
};
