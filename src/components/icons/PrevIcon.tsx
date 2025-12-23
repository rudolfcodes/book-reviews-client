import { IconProps } from "@/types/icon/icon.types";
import * as React from "react";
const PrevIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#0A2A3F"
      fillOpacity={0.2}
      d="M7.74 15.482 0 7.74 7.74 0l1.033 1.032-6.708 6.709 6.708 6.708-1.032 1.033Z"
    />
  </svg>
);
export default PrevIcon;
