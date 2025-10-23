import { ClubLocation } from "../shared/location";

interface EventEntity {
  _id: string;
  clubId: string;
  title: string;
  date: Date;
  description: string;
  location: ClubLocation;
  attendees: Attendee[];
  language: "en" | "de" | "fr" | "it";
  // TODO book: string; // To be replaced with a Book type when available
}

type Attendee = {
  userId: string;
  rsvpStatus: "attending" | "maybe" | "not_attending" | "pending";
  rsvpAt: Date;
};

export type { EventEntity, Attendee };
