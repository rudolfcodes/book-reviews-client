import BaseCard from "./BaseCard";
import Avatar from "../Avatar";
import { ClubOverviewCardProps } from "@/types/club/club.types";
import FlexContainer from "../FlexContainer";
import MembersIcon from "../icons/MembersIcon";
import BaseButton from "../buttons/BaseButton";
import Badge from "../Badge";

const ClubOverviewCard = ({
  membersCount,
  onJoinClick,
  venueType,
  genre,
  language,
  avatarUrl,
}: ClubOverviewCardProps) => {
  return (
    <BaseCard className="gap-6">
      <Avatar imageUrl={avatarUrl} size="md" altText="Club Avatar" />
      <FlexContainer className="gap-2">
        <MembersIcon />
        <span>{membersCount !== undefined ? membersCount : "N/A"} members</span>
      </FlexContainer>

      <BaseButton
        type="button"
        className="bg-error text-white px-8 py-3.5 rounded-md lg:w-[212px] h-full"
        onClick={onJoinClick}
      >
        Join Club
      </BaseButton>

      <FlexContainer className="gap-2 flex-wrap">
        {genre && <Badge>{genre}</Badge>}
        {venueType && <Badge>{venueType}</Badge>}
        {language && <Badge>{language}</Badge>}
      </FlexContainer>
    </BaseCard>
  );
};

export default ClubOverviewCard;
