import React from "react";
import styles from "./TextSection.module.scss";
import { ITextSectionProps } from "./ITextSectionProps";
import { joinClasses } from "@/common/utils/joinClasses";

export const TextSection = (props: ITextSectionProps) => {
  return (
    <div className={styles.textSection}>
      <div
        className={joinClasses(
          styles.header,
          props.onRight ? styles.alignRight : styles.alignLeft
        )}
      >
        {props.header}
      </div>
      {props.text && <div className={styles.text}>{props.text}</div>}
    </div>
  );
};
