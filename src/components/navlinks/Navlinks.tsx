import React from "react";
import styles from "./Navlinks.module.scss";
import Link from "next/link";
import { INavlinksProps } from "./INavlinksProps";
import { useTranslation } from "next-i18next";
import { ChangeLocaleButton } from "@/components/change-locale-button/ChangeLocaleButton";

export const Navlinks = (props: INavlinksProps) => {
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
        {t("navlinks.home")}
      </Link>
      <Link
        href={"/lawki-koscielne"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        {t("navlinks.churchPews")}
      </Link>
      <Link
        href={"/meble"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        {t("navlinks.furniture")}
      </Link>
      <Link
        href={"/inne"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        {t("navlinks.other")}
      </Link>
      <Link
        href={"/kontakt"}
        className={styles.link}
        onClick={() => window.scrollTo(0, 0)}
      >
        {t("navlinks.contact")}
      </Link>
      <ChangeLocaleButton />
    </nav>
  );
};
