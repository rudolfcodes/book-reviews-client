import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
  className?: string;
}

const NextImage = ({
  src,
  alt,
  width,
  height,
  quality,
  className,
}: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      className={className}
    />
  );
};

export default NextImage;
