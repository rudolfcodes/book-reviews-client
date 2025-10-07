"use client";

import useDecodeToken from "@/hooks/useDecodeToken";
import React, { ReactNode } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, setUser, loading, logout } = useDecodeToken();

  return (
    <UserContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
