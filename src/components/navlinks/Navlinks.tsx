import React from "react";
import styles from "./Navlinks.module.scss";
import Link from "next/link";
import { INavlinksProps } from "./INavlinksProps";

export const Navlinks = (props: INavlinksProps) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (props.closeHamburgerMenu) {
      props.closeHamburgerMenu(false);
    }
  };

  return (
    <nav
      className={
        props.toHamburgerMenu
          ? styles.linkContainer
          : styles.linkContainerNoHamburger
      }
    >
      <Link href={"/"} className={styles.link} onClick={handleClick}>
        STRONA GŁÓWNA
      </Link>
      <Link
        href={"/lawki-koscielne"}
        className={styles.link}
        onClick={handleClick}
      >
        ŁAWKI KOŚCIELNE
      </Link>
      <Link href={"/meble"} className={styles.link} onClick={handleClick}>
        MEBLE
      </Link>
      <Link href={"/inne"} className={styles.link} onClick={handleClick}>
        INNE
      </Link>
      <Link href={"/kontakt"} className={styles.link} onClick={handleClick}>
        KONTAKT
      </Link>
    </nav>
  );
};
