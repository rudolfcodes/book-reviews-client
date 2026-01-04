/**
 *  EventPageClient will have:
 *   - Event Details:
 *     - Title
 *     - Date & Time
 *     - Location (with Map)
 *     - Description
 *     - Host Information
 *     - Book Being Discussed
 *     - Attendee List
 *   - RSVP Button
 *
 */

import FlexContainer from "@/components/FlexContainer";
import { fetchEventDetails } from "@/services/eventService";
import { useQuery } from "@tanstack/react-query";

interface EventPageClientProps {
  eventId: string;
  initialData?: any;
}

const EventPageClient = ({ eventId, initialData }: EventPageClientProps) => {
  const {
    data: eventData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["event", eventId],
    queryFn: () => fetchEventDetails(eventId),
    enabled: !!eventId,
    initialData,
  });

  if (isLoading) {
    return (
      <div className="w-screen h-screen absolute bg-black/60">
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-white"
            role="status"
          />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-error text-base text-center mb-4">
          Error loading event details:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </div>
      </div>
    );
  }

  if (!eventData) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-gray-500 text-base text-center mb-4">
          No event details found.
        </div>
      </div>
    );
  }

  return (
    <FlexContainer className="flex-col min-h-screen w-full">
      <main className="mx-auto w-screen max-w-screen-lg p-4">
        <h1 className="text-3xl font-bold mb-4">{eventData.title}</h1>
      </main>
    </FlexContainer>
  );
};

export default EventPageClient;
