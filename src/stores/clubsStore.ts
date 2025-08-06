import { ClubsStoreState } from "@/types/club/club.types";
import { create } from "zustand";

const useClubsStore = create<ClubsStoreState>((set) => ({
  clubs: [],
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
}));

export default useClubsStore;
