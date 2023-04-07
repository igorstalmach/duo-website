import React from "react";
import { IIconProps } from "../../common/interfaces/IIconProps";

export const IconMenuOpen = (props: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill={"#000"}
    >
      <path d="M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z" />
      <path d="M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z" />
    </svg>
  );
};
