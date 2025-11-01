import * as React from "react";
const CopyrightIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M7.5 13.75a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Z" />
      <path d="M9.269 9.269a2.5 2.5 0 1 1 0-3.538" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CopyrightIcon;
