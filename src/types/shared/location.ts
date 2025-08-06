import { VenueEnum } from "../club/enums";
// Swiss-specific location types

// Create an enum for SwissCanton with all 26 Swiss cantons in 2 letters
enum SwissCantonEnum {
  AG = "AG",
  AI = "AI",
  AR = "AR",
  BE = "BE",
  BL = "BL",
  BS = "BS",
  FR = "FR",
  GE = "GE",
  GL = "GL",
  GR = "GR",
  JU = "JU",
  LU = "LU",
  NE = "NE",
  NW = "NW",
  OW = "OW",
  SG = "SG",
  SH = "SH",
  SO = "SO",
  SZ = "SZ",
  TG = "TG",
  TI = "TI",
  VD = "VD",
  VS = "VS",
  ZG = "ZG",
  ZH = "ZH",
}

type AddressValidationType = {
  isValid: boolean;
};

// Coordinates interface for latitude and longitude
interface ICoordinates {
  lat: number;
  lng: number;
}

interface ClubLocation {
  address?: string;
  city?: string;
  canton?: SwissCantonEnum;
  coordinates?: ICoordinates;
  venueType?: VenueEnum;
  ethLibraryId?: string; // For ETH Library API integration
}

export type {
  ClubLocation,
  SwissCantonEnum,
  ICoordinates,
  AddressValidationType,
};
