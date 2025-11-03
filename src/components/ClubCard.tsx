import { ClubCardProps } from "@/types";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "./Image";

const ClubCard = ({
  _id,
  location,
  memberCount,
  name,
  image,
}: ClubCardProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [memberAvatars, setMemberAvatars] = useState<string[]>([]);
  const [distanceFromUser, setDistanceFromUser] = useState<number | null>(null);
  const router = useRouter();

  const handleCardClick = () => {
    setIsPressed(!isPressed);
    setTimeout(() => setIsPressed(false), 150); // Reset after animation
    router.push(`/clubs/${_id}`);
  };

  return (
    <div
      className={`club-card cursor-pointer min-h-[280px] w-full max-w-sm mx-auto rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md ${
        isPressed ? "scale-95 opacity-80" : "scale-100"
      } transition-all duration-150 ease-out overflow-hidden`}
      onClick={handleCardClick}
    >
      <div className="relative">
        <NextImage
          width={360}
          height={170}
          src={image || "/images/default-club.jpg"}
          alt={`${name} club image`}
          className={`w-full h-40 object-cover ${
            isImageLoaded ? "loaded" : "loading"
          }`}
          onLoad={() => setIsImageLoaded(true)}
          onError={(e) => (e.currentTarget.src = "/images/default-club.jpg")}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-1">Members: {memberCount}</p>
        {location && (
          <p className="text-sm text-gray-500 truncate">
            📍 {location.city}, {location.canton}
          </p>
        )}

        {distanceFromUser !== null && (
          <p className="text-xs text-gray-400 mt-2">
            {distanceFromUser} km away
          </p>
        )}

        {memberAvatars.length > 0 && (
          <div className="flex -space-x-2 mt-3">
            {memberAvatars.slice(0, 3).map((avatar, index) => (
              <NextImage
                key={index}
                src={avatar}
                alt={`Member ${index + 1}`}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            ))}
            {memberAvatars.length > 3 && (
              <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                +{memberAvatars.length - 3}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubCard;
