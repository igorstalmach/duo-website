import React from "react";
import styles from "./SubpageSectionWrapper.module.scss";
import { ISubpageSectionWrapper } from "./ISubpageSectionWrapper";
import { joinClasses } from "@/common/utils/joinClasses";

export const SubpageSectionWrapper = (props: ISubpageSectionWrapper) => {
  return (
    <div
      className={joinClasses(
        styles.wrapper,
        props.onRight ? styles.rightWrapper : styles.leftWrapper
      )}
    >
      {props.children}
    </div>
  );
};
