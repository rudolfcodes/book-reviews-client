import React from "react";

interface IllustrationProps {
  src: string;
  alt: string;
  className?: string;
  shape?: "circle" | "square" | "rounded";
  size?: "small" | "medium" | "large";
}

const Illustration = ({
  src,
  alt,
  className,
  shape = "circle",
  size = "large",
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
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${shapeClasses[shape]} ${sizeClasses[size]} object-cover ${
        className || ""
      }`}
    />
  );
};

export default Illustration;
