import React from "react";
import { IIconProps } from "../../common/interfaces/IIconProps";

export const IconMenuClosed = (props: IIconProps) => {
  return (
    <svg
      fill="none"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke={"#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
};
