import { DecodedToken } from "@/types/token";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export async function getServerAuthToken(): Promise<{
  token: string | null;
  isAuthenticated: boolean;
  decodedToken: DecodedToken | null;
  userId: string | null;
}> {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return {
      token: null,
      isAuthenticated: false,
      decodedToken: null,
      userId: null,
    };
  }

  try {
    const decodedToken = jwtDecode<DecodedToken>(token);
    return {
      token,
      decodedToken,
      isAuthenticated: true,
      userId: decodedToken.userId,
    };
  } catch (error) {
    console.log("Error verifying token:", error);
    return {
      token: null,
      isAuthenticated: false,
      decodedToken: null,
      userId: null,
    };
  }
}
