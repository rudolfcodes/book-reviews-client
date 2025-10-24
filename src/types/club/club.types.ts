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
  imageUrl?: string;
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
  | "imageUrl"
  | "description"
  | "language"
  | "members"
  | "meetingFrequency"
  | "meetingTime"
>;

type ClubsApiResponse = {
  data: {
    docs: ClubSimplified[];
    totalDocs?: number;
    limit?: number;
    page?: number;
    hasNextPage?: boolean;
  };
};

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
  limit?: number;
  language?: string;
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
  sortBy?: string;
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
  allClubs: ClubEntity[];
  loading: boolean;
  filterClubs: () => void;
  setClubs: (clubs: ClubEntity[]) => void;
  addClub: (club: ClubEntity) => void;
  removeClub: (clubId: string) => void;
  updateClub: (updatedClub: ClubEntity) => void;
  setSearchQuery: (query: string) => void;
  isJoiningClub: boolean;
  setJoiningClub: (isJoining: boolean) => void;
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
  ClubsApiResponse,
};
