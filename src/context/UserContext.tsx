"use client";

import { UserType } from "@/types/user";
import { createContext } from "react";

interface UserContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  loading: boolean;
  logout: () => void;
  refreshUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default UserContext;
