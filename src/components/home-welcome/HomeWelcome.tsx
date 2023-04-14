import React from "react";
import styles from "./HomeWelcome.module.scss";
import { joinClasses } from "@/common/utils/joinClasses";

export const HomeWelcome = () => {
  return (
    <div className={styles.container}>
      <h1 className={joinClasses(styles.text, styles.title)}>
        {"PRACOWNIA TAPICERSKA"}
      </h1>
      <h2 className={joinClasses(styles.text, styles.subtitle)}>
        {'Firma "Duo"'}
      </h2>
    </div>
  );
};
