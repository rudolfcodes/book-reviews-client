import React from "react";

type Props = {
  imageSrc: string;
  alt: string;
};

const Logo = ({ imageSrc, alt }: Props) => {
  return (
    <div className="flex justify-center lg:justify-normal mt-auth-gap lg:mb-[100px] xl:ml-[-70px]">
      <img src={imageSrc} alt={alt} />
    </div>
  );
};

export default Logo;
