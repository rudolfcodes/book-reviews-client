import { ClubsStoreState } from "@/types/club/club.types";
import axiosInstance from "@/utils/axios";
import { create } from "zustand";

const useClubsStore = create<ClubsStoreState>((set, get) => ({
  clubs: [],
  allClubs: [],
  loading: false,
  filterClubs: () => {
    const { searchQuery, allClubs } = get();
    const filteredClubs = searchQuery
      ? allClubs.filter(
          (club) =>
            club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            club.location?.city
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase())
        )
      : allClubs;

    set({ clubs: filteredClubs });
  },
  setClubs: (clubs) => set({ clubs }),
  addClub: (club) => set((state) => ({ clubs: [...state.clubs, club] })),
  removeClub: (clubId) =>
    set((state) => ({
      clubs: state.clubs.filter((club) => club._id !== clubId),
    })),
  updateClub: (updatedClub) =>
    set((state) => ({
      clubs: state.clubs.map((club) =>
        club._id === updatedClub._id ? updatedClub : club
      ),
    })),
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().filterClubs();
  },
  isJoiningClub: false,
  setJoiningClub: (isJoining: boolean) => set({ isJoiningClub: isJoining }),
  hasMore: false,
  searchQuery: "",
  selectedLocation: undefined,
  totalClubs: 0,
  pageSize: 10,
  currentPage: 1,
  error: undefined,
}));

export default useClubsStore;
