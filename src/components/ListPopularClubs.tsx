"use client";

import React from "react";
import { useFetchPopularClubs } from "@/hooks/useFetchPopularClubs";
import ClubCard from "../components/cards/ClubCard";
import InnerWrapper from "./InnerWrapper";

const ListPopularClubs = () => {
  const { popularClubs, isLoading, isError, refetch } = useFetchPopularClubs();
  console.log("Popular Clubs:", popularClubs);

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
    <InnerWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularClubs.map((club) => (
          <ClubCard key={club._id} {...club} />
        ))}
      </div>
    </InnerWrapper>
  );
};

export default ListPopularClubs;
