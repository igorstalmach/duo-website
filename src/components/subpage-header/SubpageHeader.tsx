import React from "react";
import styles from "./SubpageHeader.module.scss";
import { ISubpageHeaderProps } from "./ISubpageHeaderProps";

export const SubpageHeader = (props: ISubpageHeaderProps) => {
  return <h1 className={styles.container}>{props.header}</h1>;
};
