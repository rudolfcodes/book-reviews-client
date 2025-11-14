import { IconProps } from "@/types/icon/icon.types";
import * as React from "react";
const PhoneIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.256 15.877a.958.958 0 0 0 1.162-.29l.34-.445a1.917 1.917 0 0 1 1.534-.767h2.875a1.917 1.917 0 0 1 1.916 1.916v2.875a1.917 1.917 0 0 1-1.916 1.917 17.25 17.25 0 0 1-17.25-17.25 1.917 1.917 0 0 1 1.916-1.917h2.875a1.917 1.917 0 0 1 1.917 1.917v2.875a1.917 1.917 0 0 1-.767 1.534l-.448.336a.958.958 0 0 0-.28 1.181 13.417 13.417 0 0 0 6.126 6.118Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h23v23H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default PhoneIcon;
