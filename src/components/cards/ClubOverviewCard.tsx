import BaseCard from "./BaseCard";
import Avatar from "../Avatar";
import { ClubOverviewCardProps } from "@/types/club/club.types";

const ClubOverviewCard = ({
  membersCount,
  onJoinClick,
  venueType,
  genre,
  language,
  avatarUrl,
}: ClubOverviewCardProps) => {
  return (
    <BaseCard>
      <Avatar imageUrl={avatarUrl} size="md" altText="Club Avatar" />
    </BaseCard>
  );
};

export default ClubOverviewCard;
