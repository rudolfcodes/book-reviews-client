import { highlightText } from "@/utils/helpers";
import React from "react";

interface TitleContainerProps {
  title: string;
  className?: string;
  coloredText?: {
    color: string;
    text: string;
  };
}

const TitleContainer = ({
  title,
  className,
  coloredText,
}: TitleContainerProps) => {
  return (
    <h1
      className={`text-modern-primary text-5xl font-semibold ${
        className || ""
      }`}
    >
      {coloredText
        ? highlightText(title, coloredText?.text, coloredText?.color)
        : title}
    </h1>
  );
};

export default TitleContainer;
