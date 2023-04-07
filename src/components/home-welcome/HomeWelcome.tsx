import React from "react";
import styles from "./HomeWelcome.module.scss";
import { useTranslation } from "react-i18next";

export const HomeWelcome = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{t("home.hero.title")}</div>
      <div className={styles.subtitle}>{t("home.hero.subtitle")}</div>
    </div>
  );
};
