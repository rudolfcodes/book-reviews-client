import React from "react";
import FlexContainer from "./FlexContainer";
import TitleContainer from "./TitleContainer";
import TextContainer from "./TextContainer";

const SearchClubs = () => {
  return (
    <FlexContainer className="flex-col md:max-w-[455px]">
      <TitleContainer
        title="Find a club near you, or start your own."
        className="mb-8 font-openSans"
        coloredText={{ text: "Clubs", color: "hero" }}
      />
      <TextContainer
        className="font-openSans text-base"
        text="Browse clubs by city, language, and genre. RSVP in two clicks."
      />
    </FlexContainer>
  );
};

export default SearchClubs;
