import React from "react";
import styles from "./Navlinks.module.scss";
import Link from "next/link";
import { INavlinksProps } from "./INavlinksProps";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const Navlinks = (props: INavlinksProps) => {
  const router = useRouter();
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  const changeTo = router.locale === "pl" ? "en" : "pl";
  const [t] = useTranslation();

  return (
    <nav
      className={
        props.toHamburgerMenu
          ? styles.linkContainer
          : styles.linkContainerNoHamburger
      }
    >
      <Link
        href={"/"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        STRONA GŁÓWNA
      </Link>
      <Link
        href={"/lawki-koscielne"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        ŁAWKI KOŚCIELNE
      </Link>
      <Link
        href={"/meble"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        MEBLE
      </Link>
      <Link
        href={"/inne"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        INNE
      </Link>
      <Link
        href={"/kontakt"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        KONTAKT
      </Link>
      <button
        className={styles.link}
        onClick={() => onToggleLanguageClick(changeTo)}
      >
        {t("changeLocale", { changeTo })}
      </button>
    </nav>
  );
};
