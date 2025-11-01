import { ClubSimplified } from "@/types";
import React from "react";
import BaseCard from "./BaseCard";
import FlexContainer from "../FlexContainer";
import BaseButton from "../buttons/BaseButton";
import Link from "next/link";
import useJoinClub from "@/hooks/useJoinClub";
import useClubsStore from "@/stores/clubsStore";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import BadgeList from "../BadgeList";
import TextContainer from "../TextContainer";

const ClubCard = ({
  _id,
  name,
  location,
  imageUrl,
  description,
  language,
  members,
  meetingFrequency,
  meetingTime,
}: ClubSimplified) => {
  const { user } = useCurrentUser();
  const isAlreadyMember = members.some((member) => member.userId === user?.id);
  const { mutate: joinClub, isPending } = useJoinClub();
  const { isJoiningClub } = useClubsStore();
  const joinButtonDisabled = isJoiningClub || isPending || isAlreadyMember;

  const badges = [
    meetingTime || "Time TBA",
    location?.city || "Location TBA",
    `${members?.length || 0} members`,
    language || "Language TBA",
    meetingFrequency || "Frequency TBA",
  ];

  return (
    <BaseCard key={_id} className="min-h-[563px] max-w-[360px] justify-between">
      <img
        src={imageUrl || "/images/club-placeholder.jpg"}
        alt={name}
        className="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl lg:h-40"
      />

      <FlexContainer className="flex-col gap-2 px-7 py-8 flex-1">
        <h3 className="text-card-title font-medium mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
          {name}
        </h3>

        {badges.length > 0 && <BadgeList badges={badges} />}

        <TextContainer
          text={description}
          className="text-input-color text-base mt-4 line-clamp-5 min-h-[100px] flex-grow"
        />

        <div className="mt-auto pt-6">
          <BaseButton
            type="button"
            className="w-full bg-error text-white h-10 rounded-xl font-medium hover:scale-105 hover:bg-error transition-all duration-200 border-none mb-4"
            onClick={() => joinClub(_id)}
            disabled={joinButtonDisabled}
          >
            {isAlreadyMember ? "Joined" : isPending ? "Joining..." : "Join"}
          </BaseButton>
          <Link
            className="flex justify-center font-openSans text-primary-grey text-xs underline"
            href={`/clubs/${_id}`}
          >
            Details
          </Link>
        </div>
      </FlexContainer>
    </BaseCard>
  );
};

export default ClubCard;
