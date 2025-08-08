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
    <div id="discover-clubs" className="min-h-screen bg-slate-50 px-6 py-8">
      <div className="max-w-none mx-auto">
        <h1 className="text-5xl font-light text-slate-800 mb-2 tracking-tight">
          Discover Clubs
        </h1>
        <p className="text-lg text-slate-600 mb-8 font-light">
          Find your perfect reading community in Switzerland
        </p>

        <div className="mb-12">
          <input
            type="text"
            placeholder="Search clubs..."
            value={searchQuery}
            onChange={(e) =>
              useClubsStore.getState().setSearchQuery(e.target.value)
            }
            className="w-full max-w-lg h-12 px-4 bg-white border border-slate-200 rounded-none text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors duration-200"
          />
          {loading && (
            <div className="mt-8 space-y-4">
              <div className="h-6 bg-slate-200 rounded-none animate-pulse"></div>
              <div className="h-6 bg-slate-200 rounded-none animate-pulse w-3/4"></div>
              <div className="h-6 bg-slate-200 rounded-none animate-pulse w-1/2"></div>
            </div>
          )}
          {!loading && clubs.length === 0 && (
            <p className="text-slate-500 text-center mt-8 font-light">
              No clubs found.
            </p>
          )}
          {!loading && clubs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
            </div>
          )}
        </div>
        {hasMore && (
          <button
            onClick={() =>
              useClubsStore
                .getState()
                .fetchClubs({ currentPage: (currentPage as number) + 1 })
            }
            className="w-full max-w-md mx-auto block bg-slate-800 text-white h-12 px-6 rounded-none font-light tracking-wide hover:bg-slate-700 transition-colors duration-200"
          >
            Load More Clubs
          </button>
        )}
      </div>
    </div>
  );
};

export default ClubDiscoveryFeed;
