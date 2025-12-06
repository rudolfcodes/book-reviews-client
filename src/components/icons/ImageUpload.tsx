import { IconProps } from "@/types/icon/icon.types";
import * as React from "react";
const ImageUploadIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#666464"
      d="M2.5 2.5v11h11v-11h-11Zm-.5-1h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5Z"
    />
    <path
      fill="#666464"
      d="M6 4.5c.667 0 1 .333 1 1s-.333 1-1 1-1-.333-1-1 .333-1 1-1Zm-3.103 9.203-.794-.608L5.48 8.688a1.5 1.5 0 0 1 2.103-.279l.029.023 1.92 1.549a.5.5 0 0 0 .703-.076l3.375-4.217.78.624-3.372 4.216-.004.005a1.5 1.5 0 0 1-2.11.226l-1.92-1.548-.01-.008a.5.5 0 0 0-.7.093l-3.377 4.407Z"
    />
  </svg>
);
export default ImageUploadIcon;
