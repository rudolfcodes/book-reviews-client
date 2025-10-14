import { ClubEntity } from "@/types";
import React from "react";

type ClubResult = Pick<ClubEntity, "_id" | "name">;

interface LiveClubSearchResultsProps {
  clubs: ClubResult[];
  isLoading: boolean;
}

const LiveClubSearchResults = ({
  clubs,
  isLoading,
}: LiveClubSearchResultsProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (clubs.length === 0) {
    return <div>No clubs found.</div>;
  }

  return (
    <ul>
      {clubs.map((club) => (
        <li key={club._id}>{club.name}</li>
      ))}
    </ul>
  );
};

export default LiveClubSearchResults;
