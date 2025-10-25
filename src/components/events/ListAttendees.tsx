import { Attendee } from "@/types/event/event.types";
import React from "react";
import FlexContainer from "../FlexContainer";
import { useCurrentUser } from "@/hooks/useCurrentUser";

interface ListAttendeesProps {
  attendees: Attendee[];
  maxAttendees?: number;
}

const ListAttendees = ({ attendees, maxAttendees }: ListAttendeesProps) => {
  const { user } = useCurrentUser();

  return (
    <FlexContainer className="gap-3.5 mt-14 items-center">
      <FlexContainer className="flex">
        {attendees.map((attendee, index) => (
          <div
            key={`${index}-attendee-${attendee.userId}`}
            className="w-9 h-9 rounded-full overflow-hidden -ml-2"
          >
            <img
              src={user?.avatar || "/images/avatar-placeholder.jpg"}
              alt={user?.username}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </FlexContainer>

      <FlexContainer className="text-xs">
        {attendees.length} / {maxAttendees} going
      </FlexContainer>
    </FlexContainer>
  );
};

export default ListAttendees;
