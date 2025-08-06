import { ClubCardProps } from "@/types";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ClubCard = ({
  _id,
  location,
  memberCount,
  name,
  image,
}: ClubCardProps) => {
  // Render a card for each club with its name, member count, and location
  const [isPressed, setIsPressed] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [memberAvatars, setMemberAvatars] = useState<string[]>([]);
  const [distanceFromUser, setDistanceFromUser] = useState<number | null>(null);
  const router = useRouter();

  // the user will go to the club page when they click on the card
  const handleCardClick = () => {
    // navigate to the club page
    setIsPressed(!isPressed);
    router.push(`/clubs/${_id}`);
  };

  return (
    <li className="club-card" key={_id} onClick={handleCardClick}>
      <h3 className="club-name">{name}</h3>
      <img
        src={image}
        alt={`${name} club image`}
        className={`club-image ${isImageLoaded ? "loaded" : "loading"}`}
        onLoad={() => setIsImageLoaded(true)}
      />
      <p className="club-members">Members: {memberCount}</p>
      {location && (
        <p className="club-location">
          Location: {location.city}, {location.canton}
        </p>
      )}

      {distanceFromUser !== null && (
        <p className="club-distance">
          Distance from you: {distanceFromUser} km
        </p>
      )}

      <div className="member-avatars">
        {memberAvatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Member ${index + 1}`}
            className="member-avatar rounded-full"
          />
        ))}
      </div>
    </li>
  );
};

export default ClubCard;
