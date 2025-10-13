"use client";

import React from "react";
import FlexContainer from "./FlexContainer";
import SearchClubs from "./SearchClubs";
import InnerWrapper from "./InnerWrapper";

const Hero = () => {
  const scrollToClubs = () => {
    const clubsSection = document.getElementById("discover-clubs");
    if (clubsSection) {
      clubsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative bg-hero bg-opacity-10 py-12">
      <FlexContainer>
        <InnerWrapper>
          <SearchClubs />
        </InnerWrapper>
      </FlexContainer>
    </section>
  );
};

export default Hero;
