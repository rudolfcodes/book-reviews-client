import React from "react";

type Props = {
  imageSrc: string;
  alt: string;
};

const Logo = ({ imageSrc, alt }: Props) => {
  return (
    <div className="mb-[100px] ml-[-80px]">
      <img src={imageSrc} alt={alt} />
    </div>
  );
};

export default Logo;
