import { VenueEnum } from "../club/enums";

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

export type Canton = {
  code: SwissCantonEnum;
  de: string;
  fr: string;
  it: string;
  en: string;
};

export const CANTONS: readonly Canton[] = [
  {
    code: SwissCantonEnum.AG,
    de: "Aargau",
    fr: "Argovie",
    it: "Argovia",
    en: "Aargau",
  },
  {
    code: SwissCantonEnum.AI,
    de: "Appenzell Innerrhoden",
    fr: "Appenzell Rhodes-Intérieures",
    it: "Appenzello Interno",
    en: "Appenzell Innerrhoden",
  },
  {
    code: SwissCantonEnum.AR,
    de: "Appenzell Ausserrhoden",
    fr: "Appenzell Rhodes-Extérieures",
    it: "Appenzello Esterno",
    en: "Appenzell Ausserrhoden",
  },
  {
    code: SwissCantonEnum.BE,
    de: "Bern",
    fr: "Berne",
    it: "Berna",
    en: "Bern",
  },
  {
    code: SwissCantonEnum.BL,
    de: "Basel-Landschaft",
    fr: "Bâle-Campagne",
    it: "Basilea Campagna",
    en: "Basel-Landschaft",
  },
  {
    code: SwissCantonEnum.BS,
    de: "Basel-Stadt",
    fr: "Bâle-Ville",
    it: "Basilea Città",
    en: "Basel-Stadt",
  },
  {
    code: SwissCantonEnum.FR,
    de: "Freiburg",
    fr: "Fribourg",
    it: "Friburgo",
    en: "Fribourg",
  },
  {
    code: SwissCantonEnum.GE,
    de: "Genf",
    fr: "Genève",
    it: "Ginevra",
    en: "Geneva",
  },
  {
    code: SwissCantonEnum.GL,
    de: "Glarus",
    fr: "Glaris",
    it: "Glarona",
    en: "Glarus",
  },
  {
    code: SwissCantonEnum.GR,
    de: "Graubünden",
    fr: "Grisons",
    it: "Grigioni",
    en: "Grisons",
  },
  { code: SwissCantonEnum.JU, de: "Jura", fr: "Jura", it: "Giura", en: "Jura" },
  {
    code: SwissCantonEnum.LU,
    de: "Luzern",
    fr: "Lucerne",
    it: "Lucerna",
    en: "Lucerne",
  },
  {
    code: SwissCantonEnum.NE,
    de: "Neuenburg",
    fr: "Neuchâtel",
    it: "Neuchâtel",
    en: "Neuchâtel",
  },
  {
    code: SwissCantonEnum.NW,
    de: "Nidwalden",
    fr: "Nidwald",
    it: "Nidvaldo",
    en: "Nidwalden",
  },
  {
    code: SwissCantonEnum.OW,
    de: "Obwalden",
    fr: "Obwald",
    it: "Obvaldo",
    en: "Obwalden",
  },
  {
    code: SwissCantonEnum.SG,
    de: "St. Gallen",
    fr: "Saint-Gall",
    it: "San Gallo",
    en: "St. Gallen",
  },
  {
    code: SwissCantonEnum.SH,
    de: "Schaffhausen",
    fr: "Schaffhouse",
    it: "Sciaffusa",
    en: "Schaffhausen",
  },
  {
    code: SwissCantonEnum.SO,
    de: "Solothurn",
    fr: "Soleure",
    it: "Soletta",
    en: "Solothurn",
  },
  {
    code: SwissCantonEnum.SZ,
    de: "Schwyz",
    fr: "Schwytz",
    it: "Svizzera Interna",
    en: "Schwyz",
  },
  {
    code: SwissCantonEnum.TG,
    de: "Thurgau",
    fr: "Thurgovie",
    it: "Turgovia",
    en: "Thurgau",
  },
  {
    code: SwissCantonEnum.TI,
    de: "Tessin",
    fr: "Tessin",
    it: "Ticino",
    en: "Ticino",
  },
  { code: SwissCantonEnum.VD, de: "Waadt", fr: "Vaud", it: "Vaud", en: "Vaud" },
  {
    code: SwissCantonEnum.VS,
    de: "Wallis",
    fr: "Valais",
    it: "Vallese",
    en: "Valais",
  },
  { code: SwissCantonEnum.ZG, de: "Zug", fr: "Zoug", it: "Zugo", en: "Zug" },
  {
    code: SwissCantonEnum.ZH,
    de: "Zürich",
    fr: "Zurich",
    it: "Zurigo",
    en: "Zurich",
  },
];

export const cantonOptions = (lang: "de" | "fr" | "it" | "en") =>
  CANTONS.map((canton) => ({
    value: canton.code,
    label: canton[lang] ?? canton.en,
  }));

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
