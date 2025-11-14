import { ClubLocation } from "../shared/location";

interface EventEntity {
  _id: string;
  clubId: string;
  title: string;
  slug: string;
  date: Date;
  description: string;
  location: ClubLocation;
  attendees: Attendee[];
  maxAttendees?: number;
  language: "en" | "de" | "fr" | "it";
}

type Attendee = {
  userId: string;
  rsvpStatus: "attending" | "maybe" | "not_attending" | "pending";
  rsvpAt: Date;
};

type EventFilterParams = {
  limit?: number;
  language?: string;
  title?: string;
  dateRange?: {
    from?: Date;
    to?: Date;
  };
  location?: {
    city?: string;
    canton?: string;
    venueType?: string;
  };
  currentPage?: number;
  pageSize?: number;
  sortBy?: string;
};

type EventApiResponse = {
  data: {
    docs: EventEntity[];
    totalDocs?: number;
    limit?: number;
    page?: number;
    hasNextPage?: boolean;
  };
};

export type { EventEntity, Attendee, EventFilterParams, EventApiResponse };
