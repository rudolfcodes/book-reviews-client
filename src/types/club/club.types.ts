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

// Club state for zustand store
type ClubsStoreState = {
  clubs: ClubEntity[];
  loading: boolean;
  fetchClubs: (params?: ClubFilterParams) => Promise<void>;
  setClubs: (clubs: ClubEntity[]) => void;
  addClub: (club: ClubEntity) => void;
  removeClub: (clubId: string) => void;
  updateClub: (updatedClub: ClubEntity) => void;
  hasMore: boolean; // For pagination
  searchQuery?: string; // For search functionality
  selectedLocation?: ClubLocation; // For location-based filtering
  page?: number; // For pagination
  error?: string; // For error handling
};

export type {
  ClubEntity,
  CreateClubDTO,
  UpdateClubDTO,
  ClubCardProps,
  ClubFilterParams,
  ClubSearchResponseDTO,
  ClubsStoreState,
};
