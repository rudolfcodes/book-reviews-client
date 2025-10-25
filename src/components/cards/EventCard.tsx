import { EventEntity } from "@/types/event/event.types";
import BaseCard from "./BaseCard";
import Badge from "../Badge";
import CalendarIcon from "../icons/CalendarIcon";
import BadgeList from "../BadgeList";

const EventCard = ({
  _id,
  title,
  date,
  description,
  location,
  attendees,
  language,
}: EventEntity) => {
  const badgeItems = [
    date.toString(),
    location?.city || "Location TBA",
    language || "Language TBA",
    location?.venueType ? `Venue: ${location.venueType}` : "Venue TBA",
  ].filter(Boolean);

  return (
    <BaseCard key={_id} className="min-h-[360px] max-w-[360px] p-7">
      <Badge className="!bg-badge-circular flex items-center justify-center !bg-opacity-50 w-11 h-11 !px-3 rounded-badge">
        <CalendarIcon />
      </Badge>

      <div className="flex flex-col gap-2 mt-10">
        <h3 className="text-card-title font-medium mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h3>
        {badgeItems.length > 0 && <BadgeList badges={badgeItems} />}
        <p className="text-sm text-gray-600 flex-1">{description}</p>
      </div>
    </BaseCard>
  );
};

export default EventCard;
