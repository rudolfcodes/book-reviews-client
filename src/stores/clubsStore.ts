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
      const data = await response.data.json();
      set({ clubs: data, loading: false });
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
  hasMore: false,
  searchQuery: "",
  selectedLocation: undefined,
  page: 1,
  error: undefined,
}));

export default useClubsStore;
