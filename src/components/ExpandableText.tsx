import { useState } from "react";
import TextContainer from "./TextContainer";
import BaseButton from "./buttons/BaseButton";

interface ExpandableTextProps {
  text: string;
  maxParagraphs?: number;
  showMoreLabel?: string;
  showLessLabel?: string;
}

const ExpandableText = ({
  text,
  maxParagraphs = 1,
  showMoreLabel = "Show more",
  showLessLabel = "Show less",
}: ExpandableTextProps) => {
  const paragraphs = text.split("\n").filter((p) => p.trim() !== "");
  const isExpandable = paragraphs.length > maxParagraphs;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${isExpandable ? "relative" : ""}`}>
      <div>
        {isExpanded || !isExpandable
          ? paragraphs.map((p, index) => (
              <TextContainer
                key={index}
                text={p}
                className="mb-4 last:mb-0 text-font18 leading-8"
              />
            ))
          : paragraphs
              .slice(0, maxParagraphs)
              .map((p, index) => (
                <TextContainer
                  key={index}
                  text={p}
                  className="mb-4 last:mb-0 text-font18 leading-8"
                />
              ))}
      </div>
      <BaseButton
        id="expand-description"
        className="font-semibold font-plusJakarta text-sm underline"
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? showLessLabel : showMoreLabel}
      </BaseButton>
    </div>
  );
};

export default ExpandableText;
