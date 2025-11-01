"use client";

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
    <section className="bg-hero flex py-section-lg gap-20 bg-opacity-15">
      <InnerWrapper className="flex flex-col">
        <h1 className="font-openSans text-section-title font-semiBold mb-12">
          Happening this week near you
        </h1>

        {/* Event filter badges: Today, This week, Online, In-person */}
        <FlexContainer className="justify-between items-center mb-24 lg:w-[45%]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <EventCard key={event._id} {...event} />
          ))}
        </div>
      </InnerWrapper>
    </section>
  );
};

export default ListEvents;
