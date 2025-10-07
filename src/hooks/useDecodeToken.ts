"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { UserType } from "@/types/user";

const useDecodeToken = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUserFromToken = () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedUser = jwtDecode<UserType>(token);
        console.log("Decoded user:", decodedUser);
        setUser(decodedUser);
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    } else {
      console.log("No token found in localStorage");
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUserFromToken();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const refreshUser = () => {
    setLoading(true);
    loadUserFromToken();
  };

  return { user, setUser, loading, logout, refreshUser };
};

export default useDecodeToken;
