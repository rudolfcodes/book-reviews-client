import { Metadata } from "next";
import EventPageClient from "./EventPageClient";
import { fetchEventDetails } from "@/services/eventService";

export async function generateMetadata({
  params,
}: {
  params: { eventId: string };
}): Promise<Metadata> {
  console.log({ params });

  return {
    title: `Event - ${params.eventId}`,
    description: `Details for event with ID: ${params.eventId}`,
  };
}

const EventPage = async ({ params }: { params: { eventId: string } }) => {
  const fetched = await fetchEventDetails(params.eventId);
  console.log({ fetched });
  return (
    <EventPageClient eventId={params.eventId} initialData={fetched.data} />
  );
};

export default EventPage;
