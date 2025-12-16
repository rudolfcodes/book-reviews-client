import * as React from "react";
import { IconProps } from "@/types/icon/icon.types";

const MembersIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#1B4E6E"
      d="M3.5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0ZM5 14a5 5 0 0 0-5 5v2h17v-2a5 5 0 0 0-5-5H5Zm19 7h-5v-2c0-1.959-.804-3.73-2.1-5H19a5 5 0 0 1 5 5v2Zm-8.5-9c-.61 0-1.216-.111-1.786-.329A6.97 6.97 0 0 0 15.5 7a6.97 6.97 0 0 0-1.787-4.671A5 5 0 1 1 15.5 12Z"
    />
  </svg>
);
export default MembersIcon;
