import { ClubEntity } from "@/types";
import React from "react";
import BaseCard from "./cards/BaseCard";

type PopularClub = Pick<
  ClubEntity,
  "_id" | "name" | "memberCount" | "location" | "clubImage"
>;

const ListPopularClubs = ({
  popularClubs,
}: {
  popularClubs: PopularClub[];
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {popularClubs.map((club) => (
        <BaseCard key={club._id}>
          <img
            src={club.clubImage}
            alt={club.name}
            className="w-full h-32 object-cover rounded"
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
