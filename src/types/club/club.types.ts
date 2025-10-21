import { ClubLocation, SwissCantonEnum } from "../shared/location";
import { VenueEnum } from "./enums";
import { ClubMember } from "./member.types";

interface ClubEntity {
  _id: string;
  name: string;
  description: string;
  location: ClubLocation;
  members: ClubMember[];
  language: string;
  clubImage?: string;
  meetingFrequency?: string;
  meetingTime?: string;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
}

type ClubSimplified = Pick<
  ClubEntity,
  | "_id"
  | "name"
  | "location"
  | "clubImage"
  | "description"
  | "language"
  | "members"
  | "meetingFrequency"
  | "meetingTime"
>;

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
  location: ClubLocation;
  image?: string;
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
  currentPage?: number;
  pageSize?: number;
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

type ClubsStoreState = {
  clubs: ClubEntity[];
  allClubs: ClubEntity[]; // All clubs fetched from API, used for filtering
  loading: boolean;
  fetchClubs: (params?: ClubFilterParams) => Promise<void>;
  filterClubs: () => void;
  setClubs: (clubs: ClubEntity[]) => void;
  addClub: (club: ClubEntity) => void;
  removeClub: (clubId: string) => void;
  updateClub: (updatedClub: ClubEntity) => void;
  setSearchQuery: (query: string) => void;
  hasMore: boolean;
  searchQuery?: string;
  selectedLocation?: ClubLocation;
  pageSize?: number;
  currentPage?: number;
  totalClubs?: number;
  error?: string;
};

export type {
  ClubEntity,
  ClubSimplified,
  CreateClubDTO,
  UpdateClubDTO,
  ClubCardProps,
  ClubFilterParams,
  ClubSearchResponseDTO,
  ClubsStoreState,
};
