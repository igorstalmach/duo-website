import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { IconLogo } from "@/assets/icons/IconLogo";
import { IconMenuClosed } from "@/assets/icons/IconMenuClosed";
import { IconMenuOpen } from "@/assets/icons/IconMenuOpen";
import { Navlinks } from "../navlinks/Navlinks";
import { joinClasses } from "@/common/utils/joinClasses";
import Link from "next/link";

export const Navbar = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scrollPosition > 70
          ? joinClasses(styles.container, styles.smallContainer)
          : styles.container
      }
    >
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
        </div>
      </div>
    </div>
  );
};
