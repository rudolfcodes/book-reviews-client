import { IconProps } from "@/types/icon/icon.types";
import * as React from "react";
const JoinIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 19a8 8 0 0 1 13.292-6"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 11A5 5 0 1 0 9 1a5 5 0 0 0 0 10ZM18 14v6m3-3h-6"
    />
  </svg>
);
export default JoinIcon;
