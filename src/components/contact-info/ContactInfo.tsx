import React from "react";
import styles from "./ContactInfo.module.scss";
import { joinClasses } from "@/common/utils/joinClasses";
import { PhoneLogo } from "@/assets/icons/PhoneLogo";
import { MailLogo } from "@/assets/icons/MailLogo";

export const ContactInfo = () => {
  const splitLines = (key: string) => {
    return key.split("\n").map((line, key) => <p key={key}>{line}</p>);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {splitLines("Pracownia Tapicerska \n Firma „Duo” Beata Stalmach")}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>{"Kontakt:"}</div>
        <div className={styles.text}>
          {splitLines("ul. Dworcowa 2 \n 44-238 Czerwionka-Leszczyny")}
        </div>
        <div
          className={joinClasses(styles.text, styles.click)}
          onClick={() => (window.location.href = "tel:509225754")}
        >
          <span className={styles.logo}>
            <PhoneLogo />
          </span>
          +48 509 225 754
        </div>
        <div
          className={joinClasses(styles.text, styles.click)}
          onClick={() => (window.location.href = "tel:324315350")}
        >
          <span className={styles.logo}>
            <PhoneLogo />
          </span>
          32 43 15 350
        </div>
        <div
          className={joinClasses(styles.text, styles.click)}
          onClick={() =>
            (window.location.href = "mailto:tapicerstwostalmach@gmail.com")
          }
        >
          <span className={styles.logo}>
            <MailLogo />
          </span>
          tapicerstwostalmach@gmail.com
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>{"Godziny otwarcia:"}</div>
        <div className={styles.text}>
          {splitLines(
            "poniedziałek – piątek: od 9:00 do 17:00 \n sobota: nieczynne"
          )}
        </div>
      </div>
    </div>
  );
};
