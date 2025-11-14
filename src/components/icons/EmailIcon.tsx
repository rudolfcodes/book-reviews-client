import { IconProps } from "@/types/icon/icon.types";
import * as React from "react";
const EmailIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21.083 6.708-8.616 5.489a1.917 1.917 0 0 1-1.925 0L1.917 6.709"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.167 3.833H3.833A1.917 1.917 0 0 0 1.917 5.75v11.5c0 1.059.858 1.917 1.916 1.917h15.334a1.917 1.917 0 0 0 1.916-1.917V5.75a1.917 1.917 0 0 0-1.916-1.917Z"
    />
  </svg>
);
export default EmailIcon;
