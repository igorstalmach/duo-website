import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { IconLogo } from "@/assets/icons/IconLogo";
import { IconMenuClosed } from "@/assets/icons/IconMenuClosed";
import { IconMenuOpen } from "@/assets/icons/IconMenuOpen";
import { Navlinks } from "../navlinks/Navlinks";
import Link from "next/link";
import { joinClasses } from "@/common/utils/joinClasses";

export const Navbar = () => {
  const [menuState, setMenuState] = useState<boolean>(false);

  return (
    <div
      className={joinClasses(
        styles.container,
        menuState ? styles.containerHeight : ""
      )}
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
            <Navlinks
              toHamburgerMenu={true}
              closeHamburgerMenu={setMenuState}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
