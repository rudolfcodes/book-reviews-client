import React from "react";
import FlexContainer from "./FlexContainer";
import TitleContainer from "./TitleContainer";

type Props = {};

const SearchClubs = (props: Props) => {
  return (
    <FlexContainer className="flex-col">
      <TitleContainer
        title="Find a club near you, or start your own."
        className="mb-8 openSans-title"
        coloredText={{ text: "Clubs", color: "hero" }}
      />
    </FlexContainer>
  );
};

export default SearchClubs;
