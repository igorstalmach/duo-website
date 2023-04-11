import React from "react";
import styles from "./HomeWelcome.module.scss";
import { useTranslation } from "next-i18next";

export const HomeWelcome = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("home.hero.title")}</h1>
      <h2 className={styles.subtitle}>{t("home.hero.subtitle")}</h2>
    </div>
  );
};
