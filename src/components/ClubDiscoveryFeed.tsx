"use client";

import useClubsStore from "@/stores/clubsStore";
import React, { useEffect } from "react";
import ClubCard from "./ClubCard";

const ClubDiscoveryFeed = () => {
  // State to manage clubs, loading states, and any filters or search functionality can be added here
  // I need to implement infinite scroll or pagination for the club discovery feed and remove the load more
  // button, so I will use Zustand store to manage the state
  const {
    clubs,
    loading,
    fetchClubs,
    hasMore,
    searchQuery,
    selectedLocation,
    currentPage,
    error,
  } = useClubsStore((state) => state);

  useEffect(() => {
    fetchClubs();
  }, [fetchClubs, searchQuery, selectedLocation, currentPage]);

  if (error) {
    return <div className="error">Error fetching clubs: {error}</div>;
  }

  return (
    <div className="h-full p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Discover Clubs</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search clubs..."
          value={searchQuery}
          onChange={(e) =>
            useClubsStore.getState().setSearchQuery(e.target.value)
          }
          className="input input-bordered w-full h-8 rounded-3xl border-gray-500"
        />
        {loading && (
          <div className="animate-pulse">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
          </div>
        )}
        {!loading && clubs.length === 0 && <p>No clubs found.</p>}
        {!loading && clubs.length > 0 && (
          <ul>
            {clubs.map((club) => (
              <ClubCard
                key={club._id}
                _id={club._id}
                image={club.clubImage}
                location={club.location}
                memberCount={club.memberCount}
                name={club.name}
              />
            ))}
          </ul>
        )}
      </div>
      {hasMore && (
        <button
          onClick={() =>
            useClubsStore
              .getState()
              .fetchClubs({ currentPage: (currentPage as number) + 1 })
          }
          className="btn bg-black text-white w-full h-8 min-h-0 mb-8 rounded-3xl"
        >
          Load More Clubs
        </button>
      )}
    </div>
  );
};

export default ClubDiscoveryFeed;
