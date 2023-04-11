import React from "react";
import styles from "./ContactInfo.module.scss";
import { useTranslation } from "next-i18next";
import { joinClasses } from "@/common/utils/joinClasses";
import { PhoneLogo } from "@/assets/icons/PhoneLogo";
import { MailLogo } from "@/assets/icons/MailLogo";

export const ContactInfo = () => {
  const [t] = useTranslation();
  const translate = (key: string) => {
    return t(`contact.${key}`)
      .split("\n")
      .map((line, key) => <p key={key}>{line}</p>);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{translate("firstSection.title")}</div>
      <div className={styles.wrapper}>
        <p className={styles.header}>{translate("secondSection.header")}</p>
        <p className={styles.text}>{translate("secondSection.text")}</p>
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
        <div className={styles.header}>{translate("thirdSection.header")}</div>
        <div className={styles.text}>{translate("thirdSection.text")}</div>
      </div>
    </div>
  );
};
