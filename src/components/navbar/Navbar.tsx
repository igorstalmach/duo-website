import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { IconLogo } from "@/assets/icons/IconLogo";
import { IconMenuClosed } from "@/assets/icons/IconMenuClosed";
import { IconMenuOpen } from "@/assets/icons/IconMenuOpen";
import { Navlinks } from "../navlinks/Navlinks";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const [menuState, setMenuState] = useState<boolean>(false);
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  const changeTo = router.locale === "pl" ? "en" : "pl";
  const [t] = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <Link href={"/"}>
            <IconLogo width={127} height={73} />
          </Link>
        </div>
        <div className={styles.hamburger}>
          <div className={styles.menu} onClick={() => setMenuState(!menuState)}>
            {!menuState && <IconMenuClosed width={28} height={28} />}
            {menuState && <IconMenuOpen width={28} height={28} />}
          </div>
          <div className={!menuState ? styles.linksHidden : undefined}>
            <Navlinks toHamburgerMenu={true} />
          </div>
          <button onClick={() => onToggleLanguageClick(changeTo)}>
            {t("change-locale", { changeTo })}
          </button>
        </div>
      </div>
    </div>
  );
};
