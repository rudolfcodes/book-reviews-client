import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const NextImage = ({ src, alt, className }: ImageProps) => {
  return <Image src={src} alt={alt} className={className} />;
};

export default NextImage;
