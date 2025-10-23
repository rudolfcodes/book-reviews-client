import React from "react";
import InnerWrapper from "./InnerWrapper";
import FlexContainer from "./FlexContainer";
import Badge from "./Badge";
import Link from "next/link";
import EventCard from "./cards/EventCard";

const ListEvents = () => {
  return (
    <InnerWrapper className="bg-hero bg-opacity-15 flex-col my-32 gap-20">
      <h1 className="font-openSans text-section-title font-semiBold mb-4">
        Happening this week near you
      </h1>

      {/* Event filter badges: Today, This week, Online, In-person */}
      <FlexContainer className="justify-between items-center">
        <FlexContainer className="gap-4">
          <Badge variant="default">Today</Badge>
          <Badge variant="default">This week</Badge>
          <Badge variant="default">Online</Badge>
          <Badge variant="default">In-person</Badge>
        </FlexContainer>

        <Link href="/events" className="text-sm font-openSans text-black">
          View all events &rarr;
        </Link>
      </FlexContainer>

      {/* 3 column grid and on tablet 2 column and for mobile 1 column */}
      <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
        {[1, 2, 3].map((card) => (
          <EventCard key={card} />
        ))}
      </div>
    </InnerWrapper>
  );
};

export default ListEvents;
