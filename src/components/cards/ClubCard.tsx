import { ClubSimplified } from "@/types";
import React from "react";
import BaseCard from "./BaseCard";
import FlexContainer from "../FlexContainer";
import BaseButton from "../buttons/BaseButton";
import Link from "next/link";
import Badge from "../Badge";
import ClockIcon from "../icons/Clock";

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
  const badges = [
    meetingTime,
    location.city,
    `${members.length} members`,
    language,
    meetingFrequency,
  ];

  return (
    <BaseCard key={_id} className="min-h-[563px] justify-between">
      <img
        src={imageUrl || "/images/default-club.jpg"}
        alt={name}
        className="w-full h-32 object-cover rounded-tl-xl rounded-tr-xl lg:h-40"
      />

      <FlexContainer className="flex-col gap-2 px-7 py-8 flex-1">
        <h3 className="text-card-title font-medium mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
          {name}
        </h3>

        <FlexContainer className="text-gray-600 text-xs gap-4 flex-wrap">
          {badges.map((badge, index) => (
            <Badge
              key={`${_id}`}
              variant={index === 0 ? "success" : "default"}
              icon={index === 0 ? <ClockIcon /> : null}
              className="flex gap-2"
            >
              <span>{badge}</span>
            </Badge>
          ))}
        </FlexContainer>

        <p className="text-gray-500 text-sm mt-4 line-clamp-5 min-h-[100px] flex-grow">
          {description}
        </p>

        <div className="mt-auto pt-6">
          <BaseButton
            type="button"
            className="w-full bg-error text-white h-10 rounded-xl font-medium hover:scale-105 hover:bg-error transition-all duration-200 border-none mb-4"
          >
            Join
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
