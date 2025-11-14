import { IconProps } from "@/types/icon/icon.types";
import * as React from "react";
const ChevronDownIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={6}
    fill="none"
    {...props}
  >
    <path
      fill="#1D1B20"
      d="M5 3.45 8.45 0 9.5 1.05 5 5.55.5 1.05 1.55 0 5 3.45Z"
    />
  </svg>
);
export default ChevronDownIcon;
