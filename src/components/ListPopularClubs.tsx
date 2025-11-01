"use client";

import React from "react";
import { useFetchPopularClubs } from "@/hooks/clubs/useFetchClubs";
import ClubCard from "./cards/ClubCard";
import InnerWrapper from "./InnerWrapper";

const ListPopularClubs = () => {
  const { popularClubs, isLoading, isError, refetch } = useFetchPopularClubs();

  if (isLoading) {
    return <div>Loading popular clubs...</div>;
  }

  if (isError) {
    return (
      <div>
        Error loading popular clubs.{" "}
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  if (!popularClubs || popularClubs.length === 0) {
    return <div>No popular clubs found.</div>;
  }

  return (
    <InnerWrapper className="bg-white flex-col my-32 gap-20">
      <h1 className="font-openSans text-section-title font-semiBold mb-4">
        Popular near you
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {popularClubs.map((club) => (
          <ClubCard key={club._id} {...club} />
        ))}
      </div>
    </InnerWrapper>
  );
};

export default ListPopularClubs;
