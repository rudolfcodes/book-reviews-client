"use client";

import React from "react";
import BaseCard from "./cards/BaseCard";
import { useFetchPopularClubs } from "@/hooks/useFetchPopularClubs";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {popularClubs.map((club) => (
        <BaseCard key={club._id}>
          <img
            src={club.clubImage}
            alt={club.name}
            className="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl mb-4"
          />
          <h3 className="text-lg font-semibold">{club.name}</h3>

          {/* Badges */}
          <p className="text-sm text-gray-600">
            {club.location.city}, {club.location.canton}
          </p>
          <p className="text-sm text-gray-600">{club.memberCount} members</p>

          {/* Description */}

          {/* Join button */}

          {/* Link to club details */}
        </BaseCard>
      ))}
    </div>
  );
};

export default ListPopularClubs;
