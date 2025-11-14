import React from "react";
import NextImage from "./Image";

type Props = {
  imageSrc: string;
  alt: string;
  className?: string;
};

const Logo = ({ imageSrc, alt, className }: Props) => {
  return (
    <div className={`flex justify-center lg:justify-normal ${className}`}>
      <NextImage
        width={150}
        height={50}
        src={imageSrc}
        alt={alt}
        className="h-auto"
      />
    </div>
  );
};

export default Logo;
