import React from "react";
import NextImage from "./Image";

interface IllustrationProps {
  src: string;
  alt: string;
  className?: string;
  shape?: "circle" | "square" | "rounded";
  size?: "small" | "medium" | "large" | "auto";
  width?: number;
  height?: number;
}

const Illustration = ({
  src,
  alt,
  className,
  shape = "square",
  size = "auto",
  width = 520,
  height = 520,
}: IllustrationProps) => {
  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-none",
    rounded: "rounded-lg",
  };

  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-48 h-48 lg:w-64 lg:h-64",
    large: "w-72 h-72 lg:w-96 lg:h-96 xl:w-[520px] xl:h-[520px]",
    auto: "w-64 h-64 lg:w-1/2 lg:h-1/2 xl:w-auto xl:h-auto",
  };

  return (
    <NextImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={`${shapeClasses[shape]} ${sizeClasses[size]} object-cover ${
        className || ""
      }`}
    />
  );
};

export default Illustration;
