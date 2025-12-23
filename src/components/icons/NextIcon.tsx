import { IconProps } from "@/types/icon/icon.types";
import * as React from "react";
const NextIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#0A2A3F"
      fillOpacity={0.5}
      d="m1.033 15.482 7.74-7.741L1.033 0 0 1.032l6.708 6.709L0 14.449l1.033 1.033Z"
    />
  </svg>
);
export default NextIcon;
