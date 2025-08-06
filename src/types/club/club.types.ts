import { ClubLocation, SwissCantonEnum } from "../shared/location";
import { VenueEnum } from "./enums";
import { ClubMember } from "./member.types";

interface ClubEntity {
  _id: string;
  name: string;
  description: string;
  members: ClubMember[];
  creator: string;
  createdAt: Date;
  updatedAt: Date;
}

// Club creation / update DTO / what frontend sends
interface CreateClubDTO {
  name: string;
  description: string;
  location?: ClubLocation;
  maxMembers?: number;
}

interface UpdateClubDTO {
  name?: string;
  description?: string;
  location?: ClubLocation;
}

interface ClubCardProps {
  _id: string;
  name: string;
  memberCount: number;
  location: {
    city: string;
    canton: SwissCantonEnum;
    venueType?: VenueEnum;
  };
}

type ClubFilterParams = {
  name?: string;
  location?: {
    city?: string;
    canton?: SwissCantonEnum;
    venueType?: VenueEnum;
    coordinates?: {
      lat?: number;
      lng?: number;
    };
  };
};

type ClubSearchResponseDTO = {
  _id: string;
  name: string;
  description: string;
  memberCount: number;
  location?: ClubLocation;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
};

export type {
  ClubEntity,
  CreateClubDTO,
  UpdateClubDTO,
  ClubCardProps,
  ClubFilterParams,
  ClubSearchResponseDTO,
};
