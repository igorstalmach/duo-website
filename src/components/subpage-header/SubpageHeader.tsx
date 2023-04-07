import React from "react";
import styles from "./SubpageHeader.module.scss";
import { ISubpageHeaderProps } from "./ISubpageHeaderProps";

export const SubpageHeader = (props: ISubpageHeaderProps) => {
  return <div className={styles.container}>{props.header}</div>;
};
