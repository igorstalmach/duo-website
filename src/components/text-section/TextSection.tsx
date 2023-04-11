import React from "react";
import styles from "./TextSection.module.scss";
import { ITextSectionProps } from "./ITextSectionProps";
import { joinClasses } from "@/common/utils/joinClasses";

export const TextSection = (props: ITextSectionProps) => {
  return (
    <div className={styles.textSection}>
      <h3
        className={joinClasses(
          styles.header,
          props.onRight ? styles.alignRight : styles.alignLeft
        )}
      >
        {props.header}
      </h3>
      {props.text && (
        <section className={styles.text}>
          {props.text.split("\n").map((line, key) => (
            <p key={key}>{line}</p>
          ))}
        </section>
      )}
    </div>
  );
};
