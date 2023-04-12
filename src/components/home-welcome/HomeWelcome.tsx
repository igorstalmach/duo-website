import React from "react";
import styles from "./HomeWelcome.module.scss";
import { useTranslation } from "next-i18next";
import { joinClasses } from "@/common/utils/joinClasses";

export const HomeWelcome = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.container}>
      <h1 className={joinClasses(styles.text, styles.title)}>
        {t("home.hero.title")}
      </h1>
      <h2 className={joinClasses(styles.text, styles.subtitle)}>
        {t("home.hero.subtitle")}
      </h2>
    </div>
  );
};
