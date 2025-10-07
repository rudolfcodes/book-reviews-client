"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { UserType } from "@/types/user";

const useDecodeToken = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token from localStorage:", token);

    if (token) {
      try {
        const decodedUser = jwtDecode<UserType>(token);
        console.log("Decoded user:", decodedUser);
        setUser(decodedUser);
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem("token"); // Remove invalid token
      }
    } else {
      console.log("No token found in localStorage");
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
