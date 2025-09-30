import React from "react";

type Props = {
  imageSrc: string;
  alt: string;
};

const Logo = ({ imageSrc, alt }: Props) => {
  return (
    <div>
      <img src={imageSrc} alt={alt} />
    </div>
  );
};

export default Logo;
