import React from "react";
import InnerWrapper from "./InnerWrapper";
import FlexContainer from "./FlexContainer";
import Badge from "./Badge";
import Link from "next/link";
import EventCard from "./cards/EventCard";
import { useFetchEvents } from "@/hooks/events/useFetchEvents";

const ListEvents = () => {
  const { events, isLoading, isError, refetch } = useFetchEvents();

  if (isLoading) {
    return <div>Loading events...</div>;
  }

  if (isError) {
    return <div>Error fetching events. Please try again later.</div>;
  }

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

      <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
        {events.map((event) => (
          <EventCard key={event._id} {...event} />
        ))}
      </div>
    </InnerWrapper>
  );
};

export default ListEvents;
