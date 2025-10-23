import { EventEntity } from "@/types/event/event.types";
import BaseCard from "./BaseCard";
import Badge from "../Badge";
import CalendarIcon from "../icons/CalendarIcon";

const EventCard = ({
  _id,
  clubId,
  title,
  date,
  description,
  location,
  attendees,
  language,
}: EventEntity) => {
  return (
    <BaseCard key={_id} className="min-h-[360px] justify-between">
      <Badge className="bg-badge-circular">
        <CalendarIcon />
      </Badge>
    </BaseCard>
  );
};

export default EventCard;
