"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { UserType } from "@/types/user";

const useDecodeToken = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedUser = jwtDecode<UserType>(token);
      setUser(decodedUser);
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return { user, setUser, loading, logout };
};

export default useDecodeToken;
