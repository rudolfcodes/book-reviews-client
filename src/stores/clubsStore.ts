import { ClubsStoreState } from "@/types/club/club.types";
import axiosInstance from "@/utils/axios";
import { create } from "zustand";

const useClubsStore = create<ClubsStoreState>((set) => ({
  clubs: [],
  loading: false,
  fetchClubs: async () => {
    set({ loading: true });
    try {
      const response = await axiosInstance.get("api/bookclubs/");
      const data = response.data;

      console.log("API Response:", data);
      const clubs = Array.isArray(data) ? data : [];

      set({
        clubs: clubs,
        loading: false,
        hasMore: false, // Disable pagination for now
      });
      console.log({ clubs: response.data });
      console.log("Clubs fetched successfully");
    } catch (error) {
      console.error("Failed to fetch clubs:", error);
      set({ loading: false });
    }
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
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  hasMore: false,
  searchQuery: "",
  selectedLocation: undefined,
  totalClubs: 0,
  pageSize: 10,
  currentPage: 1,
  error: undefined,
}));

export default useClubsStore;
