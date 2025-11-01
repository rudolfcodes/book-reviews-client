import { DropdownItem } from "@/components/SelectDropdown";
import { useState } from "react";

type ClubFilter = {
  id: string;
  name: string;
  options: DropdownItem[];
};

export const clubFilterData: ClubFilter[] = [
  {
    id: "radius-filter",
    name: "Radius",
    options: [
      { id: "1", name: "5 km" },
      { id: "2", name: "10 km" },
      { id: "3", name: "15 km" },
    ],
  },
  {
    id: "language-filter",
    name: "Language",
    options: [
      { id: "1", name: "English" },
      { id: "2", name: "Spanish" },
      { id: "3", name: "French" },
    ],
  },
  {
    id: "genre-filter",
    name: "Genre",
    options: [
      { id: "1", name: "Music" },
      { id: "2", name: "Sports" },
      { id: "3", name: "Art" },
    ],
  },
];

const useClubFilters = () => {
  const [openDropdown, setOpenDropdown] = useState<ClubFilter[] | null>(null);

  const [filters, setFilters] = useState<{
    "radius-filter": string | null;
    "language-filter": string | null;
    "genre-filter": string | null;
  }>({
    "radius-filter": null,
    "language-filter": null,
    "genre-filter": null,
  });

  const handleFilterSelect = (filterId: string, value: string | null) => {
    setFilters((prev) => ({ ...prev, [filterId]: value }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  return {
    filters,
    openDropdown,
    handleFilterSelect,
    closeAllDropdowns,
  };
};

export { useClubFilters };
