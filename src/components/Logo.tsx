import React from "react";

type Props = {
  imageSrc: string;
  alt: string;
  className?: string;
};

const Logo = ({ imageSrc, alt, className }: Props) => {
  return (
    <div className={`flex justify-center lg:justify-normal ${className}`}>
      <img className="h-auto" src={imageSrc} alt={alt} />
    </div>
  );
};

export default Logo;
