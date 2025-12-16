import BaseCard from "./BaseCard";
import Avatar from "../Avatar";
import { ClubOverviewCardProps } from "@/types/club/club.types";
import FlexContainer from "../FlexContainer";
import MembersIcon from "../icons/MembersIcon";
import BaseButton from "../buttons/BaseButton";
import Badge from "../Badge";
import useUser from "@/hooks/useUser";

const ClubOverviewCard = ({
  membersCount,
  onJoinClick,
  venueType,
  genre,
  language,
  avatarUrl,
}: ClubOverviewCardProps) => {
  const { user } = useUser();

  return (
    <BaseCard className="w-full lg:!max-w-[450px] gap-6 flex-shrink-0 py-10 justify-center items-center border-none shadow-input-shadow">
      <Avatar
        imageUrl={avatarUrl}
        size="md"
        altText="Club Avatar"
        fallbackText={user?.username || ""}
      />
      <FlexContainer className="gap-2">
        <MembersIcon />
        <span>{membersCount !== undefined ? membersCount : "0"} members</span>
      </FlexContainer>

      <BaseButton
        type="button"
        className="bg-error text-white px-8 py-3.5 rounded-md lg:w-[212px] hover:scale-105 hover:bg-error transition-all duration-200"
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
