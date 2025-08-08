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
      const { docs } = response.data.data;

      const clubs = Array.isArray(docs) ? docs : [];

      const bookClubImages = [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center", // Books stack
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center", // Reading group
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop&crop=center", // Coffee and books
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=250&fit=crop&crop=center", // Library books
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center", // People studying
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=250&fit=crop&crop=center", // Book club meeting
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop&crop=center", // Cozy reading
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop&crop=center", // Books on table
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=250&fit=crop&crop=center", // Open book
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=250&fit=crop&crop=center", // Reading corner
      ];

      const clubsWithImages = clubs.map((club, index) => ({
        ...club,
        clubImage:
          club.clubImage || bookClubImages[index % bookClubImages.length],
      }));

      set({
        clubs: clubsWithImages,
        loading: false,
        hasMore: false, // Disable pagination for now
      });
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
