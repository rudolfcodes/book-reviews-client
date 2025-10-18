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
    small: "w-12 h-12",
    medium: "w-16 h-16",
    large: "w-1/2 lg:w-[520px] lg:h-[520px]",
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
