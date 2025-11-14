import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: "lazy" | "eager" | undefined;
  quality?: number;
  onLoad?: () => void;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  className?: string;
}

const NextImage = ({
  src,
  alt,
  width,
  height,
  quality,
  loading,
  onLoad,
  onError,
  className,
}: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      loading={loading}
      className={className}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default NextImage;
