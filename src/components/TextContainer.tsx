import React from "react";

interface TextContainerProps {
  text: string;
  className?: string;
}

const TextContainer = ({ text, className }: TextContainerProps) => {
  return <p className={className}>{text}</p>;
};

export default TextContainer;
