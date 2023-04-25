import React from "react";
import styles from "./HomeWelcome.module.scss";
import { joinClasses } from "@/common/utils/joinClasses";
import { IHomeWelcomeProps } from "@/components/home-welcome/IHomeWelcomeProps";

export const HomeWelcome = (props: IHomeWelcomeProps) => {
  return (
    <div className={styles.container}>
      <h1 className={joinClasses(styles.text, styles.title)}>{props.title}</h1>
      <h2 className={joinClasses(styles.text, styles.subtitle)}>
        {props.subtitle}
      </h2>
    </div>
  );
};
