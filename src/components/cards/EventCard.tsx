import { EventEntity } from "@/types/event/event.types";
import BaseCard from "./BaseCard";
import Badge from "../Badge";
import CalendarIcon from "../icons/CalendarIcon";
import BadgeList from "../BadgeList";
import TextContainer from "../TextContainer";
import FlexContainer from "../FlexContainer";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import ListAttendees from "../events/ListAttendees";
import BaseButton from "../buttons/BaseButton";
import Link from "next/link";

const EventCard = ({
  _id,
  clubId,
  title,
  date,
  description,
  location,
  attendees,
  maxAttendees,
  language,
}: EventEntity) => {
  const { user } = useCurrentUser();
  const badgeItems = [
    date.toString(),
    location?.city || "Location TBA",
    language || "Language TBA",
    location?.venueType ? `Venue: ${location.venueType}` : "Venue TBA",
  ].filter(Boolean);

  const rsvpEvent = (eventId: string) => {};

  return (
    <BaseCard
      key={_id}
      className="min-h-[360px] max-h-[545px] max-w-[360px] p-7"
    >
      <Badge className="!bg-badge-circular flex items-center justify-center !bg-opacity-50 w-11 h-11 !px-3 rounded-badge">
        <CalendarIcon />
      </Badge>

      <FlexContainer className="flex flex-col mt-10 flex-1">
        <h3 className="text-card-title font-medium mb-4 text-ellipsis overflow-hidden whitespace-nowrap">
          {title}
        </h3>
        {badgeItems.length > 0 && <BadgeList badges={badgeItems} />}

        <TextContainer
          text={description}
          className="text-input-color text-base mt-4 line-clamp-3 flex-grow"
        />

        {attendees.length > 0 && (
          <ListAttendees attendees={attendees} maxAttendees={maxAttendees} />
        )}

        <div className="mt-auto pt-6">
          <BaseButton
            type="button"
            className="w-full bg-error text-white h-10 rounded-xl font-medium hover:scale-105 hover:bg-error transition-all duration-200 border-none mb-4"
            onClick={() => rsvpEvent(_id)}
            disabled={attendees.some(
              (attendee) => attendee.userId === user?.id
            )}
          >
            {attendees.some((attendee) => attendee.userId === user?.id)
              ? "RSVPed"
              : "RSVP for the Event"}
          </BaseButton>
          <Link
            className="flex justify-center font-openSans text-primary-grey text-xs underline"
            href={`bookclubs/${clubId}/events/${_id}`}
            passHref
          >
            Details
          </Link>
        </div>
      </FlexContainer>
    </BaseCard>
  );
};

export default EventCard;
