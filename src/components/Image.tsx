import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const NextImage = ({ src, alt, width, height, className }: ImageProps) => {
  return <Image src={src} alt={alt} width={width} height={height} className={className} />;
};

export default NextImage;
