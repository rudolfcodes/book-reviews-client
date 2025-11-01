import * as React from "react";
const CalendarIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 19"
    fill="none"
    className="w-6 h-6"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.833 1v3.333M5.167 1v3.333M1 7.667h15m-13.333-5h11.666c.92 0 1.667.746 1.667 1.666V16c0 .92-.746 1.667-1.667 1.667H2.667C1.747 17.667 1 16.92 1 16V4.333c0-.92.746-1.666 1.667-1.666Z"
    />
  </svg>
);
export default CalendarIcon;
