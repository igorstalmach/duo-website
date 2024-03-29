import React from "react";
import styles from "./Footer.module.scss";
import { Navlinks } from "../navlinks/Navlinks";
import { joinClasses } from "@/common/utils/joinClasses";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.navlinks}>
          <Navlinks toHamburgerMenu={false} />
        </div>
        <div className={styles.info}>
          <p
            className={joinClasses(styles.click, styles.text)}
            onClick={() => (window.location.href = "tel:509225754")}
          >
            +48 509 225 754
          </p>
          <p
            className={joinClasses(styles.click, styles.text)}
            onClick={() =>
              (window.location.href = "mailto:tapicerstwostalmach@gmail.com")
            }
          >
            tapicerstwostalmach@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};
