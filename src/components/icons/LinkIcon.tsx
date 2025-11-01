import * as React from "react";
const LinkIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 14.333 14.333 1m0 0H1m13.333 0v13.333"
    />
  </svg>
);
export default LinkIcon;
