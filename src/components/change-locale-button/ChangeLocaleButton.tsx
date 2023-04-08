import React from "react";
import styles from "./ChangeLocaleButton.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const ChangeLocaleButton = () => {
  const router = useRouter();
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  const changeTo = router.locale === "pl" ? "en" : "pl";
  const [t] = useTranslation();

  return (
    <button
      className={styles.link}
      onClick={() => onToggleLanguageClick(changeTo)}
    >
      {t("navlinks.changeLocale", { changeTo })}
    </button>
  );
};
