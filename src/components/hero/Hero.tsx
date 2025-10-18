"use client";

import React from "react";
import FlexContainer from "../FlexContainer";
import SearchClubs from "./SearchClubs";
import InnerWrapper from "../InnerWrapper";
import Illustration from "../Illustration";

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
        <InnerWrapper className="justify-center px-6 lg:justify-between">
          <FlexContainer>
            <SearchClubs />
          </FlexContainer>
          <Illustration
            src="/images/login-illustration.png"
            alt="Hero Image"
            className="hidden lg:flex"
          />
        </InnerWrapper>
      </FlexContainer>
    </section>
  );
};

export default Hero;
